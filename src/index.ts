import { deleteOldCache } from './autoCacheBust';
import { archiveRouter } from './archive';

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return archiveRouter.fetch(request, env, ctx);
	},
	async scheduled(_event: ScheduledEvent, env: Env, _ctx: ExecutionContext) {
		await deleteOldCache(env);
	},
};
