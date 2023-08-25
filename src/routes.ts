import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { bearerAuth } from 'hono/bearer-auth';
import { cors } from 'hono/cors';
import { z } from 'zod';
import { deleteOldCache } from './autoCacheBust';

export const router = new Hono<{ Bindings: Env }>();

const paramValidator = z.object({ artifactID: z.string(), teamID: z.string().optional() });
const queryValidator = z.object({ query: z.string().optional() });

router.onError((err, c) => {
	if (err instanceof HTTPException) {
		return err.getResponse();
	}
	return c.json({ error: err.message }, 500);
});

router.use('*', cors());

router.use('*', async (c, next) => {
	const middleware = bearerAuth({ token: c.env.TURBO_TOKEN });
	await middleware(c, next);
});

router.post('/artifacts/manual-cache-bust', zValidator('json', z.object({ expireInHours: z.number().optional() })), async (c) => {
	const { expireInHours } = c.req.valid('json');
	await deleteOldCache({
		...c.env,
		EXPIRATION_HOURS: expireInHours ?? c.env.EXPIRATION_HOURS,
	});
	return c.json({ success: true });
});

router.put('/v8/artifacts/:artifactID', zValidator('param', paramValidator), zValidator('query', queryValidator), async (c) => {
	const { artifactID, teamID } = c.req.valid('param');
	const { query } = c.req.valid('query');

	if (!teamID && !query) {
		return c.json({ error: 'MISSING_TEAM_ID' }, 400);
	}

	const contentType = c.req.headers.get('Content-Type');
	if (contentType !== 'application/octet-stream') {
		return c.json({ error: 'EXPECTED_CONTENT_TYPE_OCTET_STREAM' }, 400);
	}

	const r2Metadata = {
		artifactTag: '',
	};
	const artifactTag = c.req.headers.get('x-artifact-tag');
	if (artifactTag) {
		r2Metadata.artifactTag = artifactTag;
	}

	const r2Object = await c.env.R2_STORE.put(`${teamID ?? query}/${artifactID}`, c.req.body, { customMetadata: r2Metadata });

	return c.json({ teamID, artifactID, storagePath: r2Object.key, size: r2Object.size }, 201);
});

router.get('/v8/artifacts/:artifactID/:teamID?', zValidator('param', paramValidator), zValidator('query', queryValidator), async (c) => {
	const { artifactID, teamID } = c.req.valid('param');
	const { query } = c.req.valid('query');

	if (!teamID && !query) {
		return c.json({ error: 'MISSING_TEAM_ID' }, 400);
	}

	if (artifactID === 'list') {
		const list = await c.env.R2_STORE.list();
		return c.json(list.objects.map((object) => object));
	}

	const r2Object = await c.env.R2_STORE.get(`${teamID ?? query}/${artifactID}`);
	if (!r2Object) {
		return c.notFound();
	}

	c.header('Content-Type', 'application/octet-stream');
	if (r2Object.customMetadata?.artifactTag) {
		c.header('x-artifact-tag', r2Object.customMetadata.artifactTag);
	}

	c.status(200);
	return c.body(r2Object.body);
});
