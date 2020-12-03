/**
 * @description user API 路由
 * @author ifxi
 */

const { genValidator } = require('../../middlewares/validator')
const userValidate = require('../../validator/user')
const router = require('koa-router')()
const { register } = require('../../controller/user')

router.prefix('/api/user')

// 注册
router.post('/register', genValidator(userValidate), async (ctx, next) => {
  const { email, password, nickName } = ctx.require.body
  ctx.body = await register({
    email,
    password,
    nickName,
  })
})
