// For scheduled R2 cache busting, the R2 lifecycle rules can be used to delete an object after a certain amount of time.

async function bustEntireCache(list: R2Objects, env: Env) {
	for (const object of list.objects) {
		await env.R2_ARTIFACT_ARCHIVE.delete(object.key);
	}
}

export async function bustOldCache(env: Env, cursor?: string) {
	const list = await env.R2_ARTIFACT_ARCHIVE.list({
		limit: 500,
		cursor,
	});
	await bustEntireCache(list, env);

	if (list.truncated) {
		await bustOldCache(env, list.cursor);
	}
}
