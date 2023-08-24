import { Temporal } from 'temporal-polyfill';
import { isOlderThan } from './isOlderThan';

export const RECORDS_BATCH_SIZE = 500;

function R2KeysForDeletion() {
	let keys: string[] = [];
	return {
		add: function (key: string) {
			keys.push(key);
		},
		getKeys: function () {
			return keys;
		},
	};
}

async function deleteKeys(env: Env, keysForDeletion: ReturnType<typeof R2KeysForDeletion>) {
	if (keysForDeletion.getKeys().length > 0) {
		await env.R2_STORE.delete(keysForDeletion.getKeys());
	}
}

async function processList(list: R2Objects, env: Env) {
	const keysForDeletion = R2KeysForDeletion();
	for (const object of list.objects) {
		if (isOlderThan(object.uploaded, env.EXPIRATION_HOURS)) {
			keysForDeletion.add(object.key);
		}
	}

	await deleteKeys(env, keysForDeletion);
}

export async function deleteOldCache(env: Env, cursor?: string) {
	const list = await env.R2_STORE.list({ limit: RECORDS_BATCH_SIZE, cursor });
	await processList(list, env);

	if (list.truncated) {
		await deleteOldCache(env, list.cursor);
	}
}
