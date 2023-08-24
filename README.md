"secret":{
TURBO_TOKEN: <Secret> -> `echo <VALUE> | wrangler secret put <NAME>` for each of these (must be valid Bearer token)
}
"EXPIRATION_HOURS": 168 -> 7 days

// every Sunday at 1am
"crons": ["0 1 * * 0"]
