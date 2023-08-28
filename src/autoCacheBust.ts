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

export const RECORDS_BATCH_SIZE = 500;

function R2cacheDeletion() {
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

async function deleteKeys(env: Env, cacheDeletion: ReturnType<typeof R2cacheDeletion>) {
	if (cacheDeletion.getKeys().length > 0) {
		await env.R2_STORE.delete(cacheDeletion.getKeys());
	}
}

async function processList(list: R2Objects, env: Env) {
	const cacheDeletion = R2cacheDeletion();
	for (const object of list.objects) {
		if (isOlderThan(object.uploaded, env.EXPIRATION_HOURS)) {
			cacheDeletion.add(object.key);
		}
	}

	await deleteKeys(env, cacheDeletion);
}

export async function bustOldCache(env: Env, cursor?: string) {
	const list = await env.R2_STORE.list({ limit: RECORDS_BATCH_SIZE, cursor });
	await processList(list, env);

	if (list.truncated) {
		await bustOldCache(env, list.cursor);
	}
}
