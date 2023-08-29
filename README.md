# Turbo R2 Archive

The `crons` array is a list of cron expressions that will trigger the purge. The default is every Sunday at 1am. The default expiration time is 6 days, which allows for the cache to be completely purged once a week.

```jsonc
{
	"vars": {
		"EXPIRATION_HOURS": 144 // 6 days
	},
	"secret": {
		"TURBO_TOKEN": "" // `echo <VALUE> | wrangler secret put <NAME>`
	},
	"crons": ["0 1 * * 0"] // Every Sunday at 1am
}
```

The cache can also be purged manually by sending a `POST` request to the `<baseURL>/artifacts/manual-cache-bust` endpoint. This can be done with the following command:

```bash
https -A bearer -a <TURBO_TOKEN> POST <baseURL>/artifacts/manual-cache-bust expireInHours:=0
```
