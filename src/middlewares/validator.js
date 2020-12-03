/**
 * @description json schema 验证中间件
 * @author ifxi
 */

const { ErrorModel } = require('../model/ResModel')
const { jsonSchemaFileInfo } = require('../model/ErrorInfo')

/**
 * 生成 json schema 验证的中间件
 * @param {function} validateFn 验证函数
 */
function genValidator(validateFn) {
  async function validator(ctx, next) {
    const data = ctx.request.body
    const error = validateFn(data)
    if (error) {
      ctx.body = new ErrorModel(jsonSchemaFileInfo)
      return
    }
    await next()
  }
  return validator
}

module.exports = {
  genValidator,
}
