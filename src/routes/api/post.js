/**
 * @description post API 路由
 * @author ifxi
 */

const { loginCheck } = require('../../middlewares/loginCheck')
const { create } = require('../../controller/post')
const router = require('koa-router')()
router.prefix('/api/post')

// 新建文章
router.post('/create', loginCheck, async (ctx, next) => {
  const userInfo = ctx.state.jwtdata
  const userId = userInfo._id
  const { columnId, title, content } = ctx.request.body
  ctx.body = await create({ userId, columnId, title, content })
})

module.exports = router
