/**
 * @description 失败信息集合，包括 code 和 msg
 * @author ifxi
 */

module.exports = {
  registerUserNameExistInfo: {
    code: 10001,
    msg: '用户名已存在',
  },
  registerFailInfo: {
    code: 10002,
    msg: '注册失败，请稍后再试试',
  },
  loginFailInfo: {
    code: 10004,
    msg: '登录失败，用户名或密码错误'
  },
  jsonSchemaFileInfo: {
    code: 10009,
    msg: '数据格式校验错误',
  },
  
}
