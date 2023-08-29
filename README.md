# Turbo R2 Archive

## Overview

This is a Worker that will act as an event server for caching TurboRepo artifacts. Compliant with the TurboRepo API, for remote caching, it will store the cache artifacts in a Cloudflare R2 bucket and purge the cache on a schedule. This allows for all the benefits of remote caching TurboRepo artifacts on Cloudflare's edge network.

This will require a Cloudflare account, with a zone and R2.

## Environment Variables

Utilizing `.env` file to store the variables for Turborepo API & Worker. The `.env` file is not committed to the repository. The `.env` file should be in the root of the project directory. The `.env` file should contain the following variables.

The commands are ran with `dotenv` cli `npx dotenv -- npx turbo <command>` to inject the environment variables into the command process environment.

```bash
TURBO_API=<baseURL> # https://something.com
TURBO_TEAM=<value> # team_whatever it has to start with prefix team_
TURBO_TOKEN=<value> # whatever is set in the worker secret
TURBO_REMOTE_CACHE_SIGNATURE_KEY=<value> # needs to be the same for every one using the same cache
```

## Worker Configuration

The endpoints are protected by a bearer token. The token is stored as a secret in the Worker. The token can be set with the following command:

```bash
echo <VALUE> | wrangler secret put TURBO_TOKEN
```

The `crons` array is a list of cron expressions that will trigger the purge. The default is every Sunday at 1am. The default expiration time is 6 days, expressed in `vars` `EXPIRATION_HOURS`, which allows for the cache to be completely purged once a week.

```jsonc
{
	"vars": {
		"EXPIRATION_HOURS": 144 // 6 days
	},
	"crons": ["0 1 * * 0"], // Every Sunday at 1am

	"r2_buckets": [
		{
			"binding": "R2_ARTIFACT_ARCHIVE", // The binding name for the bucket, used in the Worker i.e. env.R2_ARTIFACT_ARCHIVE.get(<key>)
			"bucket_name": "turbo-cache", // bucket name when looking for objects in dashboard
			"preview_bucket_name": "turbo-cache-preview"
		}
	]
}
```

### Manual Cache Purge

The cache can also be purged manually by sending a `POST` request to the `<baseURL>/artifacts/manual-cache-bust` endpoint. This can be done with the following command:

```bash
https -A bearer -a <TURBO_TOKEN> POST <baseURL>/artifacts/manual-cache-bust expireInHours:=0
```

Setting the value to `0` will purge the entire cache.
