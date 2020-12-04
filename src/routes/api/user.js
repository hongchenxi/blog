/**
 * @description user API 路由
 * @author ifxi
 */

const { genValidator } = require('../../middlewares/validator')
const userValidate = require('../../validator/user')
const router = require('koa-router')()
const { register, login } = require('../../controller/user')

router.prefix('/api/user')

// 注册
router.post('/register', genValidator(userValidate), async (ctx, next) => {
  const { email, password, nickName } = ctx.request.body
  ctx.body = await register({
    email,
    password,
    nickName,
  })
})

// 登录
router.post('/login', async (ctx, next) => {
  const { email, password } = ctx.request.body
  ctx.body = await login({ctx, email, password})
})

module.exports = router
