import { deleteOldCache } from './autoCacheBust';
import artifact from './routes';

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return artifact.fetch(request, env, ctx);
	},
	async scheduled(_event: ScheduledEvent, env: Env, _ctx: ExecutionContext) {
		await deleteOldCache(env);
	},
};
