import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { bearerAuth } from 'hono/bearer-auth';
import { cors } from 'hono/cors';
import { z } from 'zod';
import { deleteOldCache } from './autoCacheBust';

export const archiveRouter = new Hono<{ Bindings: Env }>();

const paramValidator = z.object({ archiveID: z.string() });
const queryValidator = z.object({ teamID: z.string().optional(), slug: z.string().optional() });

archiveRouter.onError((err, c) => {
	if (err instanceof HTTPException) {
		return err.getResponse();
	}
	return c.json({ error: err.message }, 500);
});

archiveRouter.use('*', cors());

archiveRouter.use('/archive/*', async (c, next) => {
	const middleware = bearerAuth({ token: c.env.TURBO_TOKEN });
	await middleware(c, next);
});

archiveRouter.route('/archive', archiveRouter);

archiveRouter.put('/:archiveID', zValidator('param', paramValidator), zValidator('query', queryValidator), async (c) => {
	const archiveID = c.req.valid('param').archiveID;
	const { teamID, slug } = c.req.valid('query');

	if (!teamID && !slug) {
		return c.json({ error: 'MISSING_TEAM_ID' }, 400);
	}

	const contentType = c.req.headers.get('Content-Type');
	if (contentType !== 'application/octet-stream') {
		return c.json({ error: 'EXPECTED_CONTENT_TYPE_OCTET_STREAM' }, 400);
	}

	const r2Metadata = {
		archiveTag: '',
	};
	const archiveTag = c.req.headers.get('x-archive-tag');
	if (archiveTag) {
		r2Metadata.archiveTag = archiveTag;
	}

	const r2Object = await c.env.R2_STORE.put(`${teamID ?? slug}/${archiveID}`, c.req.body, { customMetadata: r2Metadata });

	return c.json({ teamID, archiveID, storagePath: r2Object.key, size: r2Object.size }, 201);
});

archiveRouter.post('/manual-cache-bust', zValidator('json', z.object({ expireInHours: z.number().optional() })), async (c) => {
	const { expireInHours } = c.req.valid('json');
	await deleteOldCache({
		...c.env,
		EXPIRATION_HOURS: expireInHours ?? c.env.EXPIRATION_HOURS,
	});
	return c.json({ success: true });
});

archiveRouter.get('/:archiveID/:teamId?', zValidator('param', paramValidator), zValidator('query', queryValidator), async (c) => {
	const archiveID = c.req.valid('param').archiveID;
	const { teamID, slug } = c.req.valid('query');

	if (!teamID && !slug) {
		return c.json({ error: 'MISSING_TEAM_ID' }, 400);
	}

	const r2Object = await c.env.R2_STORE.get(`${teamID ?? slug}/${archiveID}`);
	if (!r2Object) {
		return c.json({ error: 'NOT_FOUND' }, 404);
	}

	c.header('Content-Type', 'application/octet-stream');
	if (r2Object.customMetadata?.archiveTag) {
		c.header('x-archive-tag', r2Object.customMetadata.archiveTag);
	}

	c.status(200);
	return c.body(r2Object.body);
});
