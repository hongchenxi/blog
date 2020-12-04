const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const koajwt = require('koa-jwt')

const { JWT_SECRET_KEY } = require('./src/conf/secretKeys')
const userAPIRouter = require('./src/routes/api/user')
const columnAPIRouter = require('./src/routes/api/column')

const { ErrorModel } = require('./src/model/ResModel')
const { jwtFailInfo } = require('./src/model/ErrorInfo')

// error handler
onerror(app)

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
)
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(
  views(__dirname + '/views', {
    extension: 'ejs',
  })
)

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(async (ctx, next) => {
  return next().catch((error) => {
    if (error.status === 401) {
      ctx.status = 401
      ctx.body = new ErrorModel(jwtFailInfo)
    }
  })
})
app.use(
  koajwt({ secret: JWT_SECRET_KEY, key: 'jwtdata' }).unless({
    path: [/\/register/, /\/login/, /^\/public/],
  })
)

// routes
app.use(userAPIRouter.routes(), userAPIRouter.allowedMethods())
app.use(columnAPIRouter.routes(), columnAPIRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
