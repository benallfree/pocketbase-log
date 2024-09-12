# pocketbase-log

Object-safe logging helpers for PocketBase.

```js
const { info, warn, error, dbg, log } = require('pocketbase-log')
dbg(`Hello world`, { foo: 42 })
```

## Notes

- `log` is available at startup. All other logging should be used inside handlers.
