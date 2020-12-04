/**
 * @description column API 路由
 * @author ifxi
 */

const router = require('koa-router')()
const { loginCheck } = require('../../middlewares/loginCheck')
const { create } = require('../../controller/column')
const { isExit } = require('../../controller/user')

router.prefix('/api/column')

//  新建专栏
router.post('/create', loginCheck, async (ctx, next) => {
  const userInfo = ctx.state.jwtdata
  const existResult = await isExit(userInfo.email)
  if (existResult.code != 0) {
    return
  }
  const userId = userInfo._id
  const { title, descript } = ctx.request.body
  ctx.body = await create({ userId, title, descript })
})

module.exports = router
