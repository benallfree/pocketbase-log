import { stringify } from 'pocketbase-stringify'

const prepare = (objs: any[]) => {
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
      return stringify(o, null, 2)
    }
    return o
  })
  return parts.join(` `)
}

const dbg = (...objs: any[]) => {
  const s = prepare(objs)
  $app.logger().debug(s)
}

const info = (...objs: any[]) => {
  const s = prepare(objs)
  $app.logger().info(s)
}

const warn = (...objs: any[]) => {
  const s = prepare(objs)
  $app.logger().warn(s)
}

const error = (...objs: any[]) => {
  const s = prepare(objs)
  $app.logger().error(s)
}

const log = (...objs: any[]) => {
  const s = prepare(objs)
  console.log(s)
}

export { dbg, info, warn, error, log }
