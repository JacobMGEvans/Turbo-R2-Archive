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
