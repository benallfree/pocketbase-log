const stringify = require('pocketbase-stringify')

const replacer = (k, v) => {
  if (v instanceof Error) {
    return v.stack
  }
  if (v instanceof RegExp) {
    return v.toString()
  }
  if (v instanceof Function) {
    return v.toString()
  }
  return v
}

const _build = (...objs) => {
  const parts = objs.map((o) => {
    if (o instanceof Error) {
      return o.stack
    }
    if (o instanceof RegExp) {
      return o.toString()
    }
    if (o instanceof Function) {
      return o.toString()
    }
    if (typeof o === 'object') {
      return stringify(o, replacer, 2)
    }
    return o
  })
  return parts.join(` `)
}

const dbg = (...objs) => $app.logger().debug(_build(...objs))
const error = (...objs) => $app.logger().error(_build(...objs))
const info = (...objs) => $app.logger().info(_build(...objs))
const warn = (...objs) => $app.logger().warn(_build(...objs))

module.exports = { dbg, error, info, warn, debug: dbg }
