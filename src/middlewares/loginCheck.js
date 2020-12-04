/**
 * @description 登录验证中间件
 * @author ifxi
 */

const { ErrorModel } = require('../model/ResModel')
const { loginCheckFailInfo } = require('../model/ErrorInfo')
const model = require('../db/model')

/**
 * 登录验证
 * @param {*} ctx
 * @param {*} next
 */
async function loginCheck(ctx, next) {
  if (ctx.state && ctx.state.jwtdata) {
    await next()
    return
  }
  ctx.body = new ErrorModel(loginCheckFailInfo)
}

module.exports = {
  loginCheck,
}
