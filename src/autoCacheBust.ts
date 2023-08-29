import { Temporal } from 'temporal-polyfill';

export function isOlderThan(date: Date, hours: number | string): boolean {
	const convertedDate = Temporal.PlainDateTime.from({
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate(),
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds(),
		millisecond: date.getMilliseconds(),
	});

	const now = Temporal.Now.plainDateTimeISO();
	const diffInHours = now.since(convertedDate, { largestUnit: 'hours' }).hours;
	return diffInHours >= Number(hours);
}

const RECORDS_BATCH_SIZE = 500;

/**
 * Creates a cache object with two methods: add and getKeys.
 * */
function r2CacheCollector() {
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

async function deleteKeys(env: Env, cacheDeletion: ReturnType<typeof r2CacheCollector>) {
	if (cacheDeletion.getKeys().length > 0) {
		await env.R2_ARTIFACT_ARCHIVE.delete(cacheDeletion.getKeys());
	}
}

async function processList(list: R2Objects, env: Env) {
	const r2CacheToDelete = r2CacheCollector();
	for (const object of list.objects) {
		if (isOlderThan(object.uploaded, env.EXPIRATION_HOURS)) {
			r2CacheToDelete.add(object.key);
		}
	}

	await deleteKeys(env, r2CacheToDelete);
}

export async function bustOldCache(env: Env, cursor?: string) {
	const list = await env.R2_ARTIFACT_ARCHIVE.list({ limit: RECORDS_BATCH_SIZE, cursor });
	await processList(list, env);

	if (list.truncated) {
		await bustOldCache(env, list.cursor);
	}
}
