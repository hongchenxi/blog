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
    msg: '注册失败，请稍后再试',
  },
  loginFailInfo: {
    code: 10003,
    msg: '登录失败，用户名或密码错误',
  },
  jsonSchemaFileInfo: {
    code: 10004,
    msg: '数据格式校验错误',
  },
  createColumnFailInfo: {
    code: 10005,
    msg: '创建专栏失败，请稍后再试',
  },
  jwtFailInfo: {
    code: 10006,
    msg: 'token 验证失败',
  },
  loginCheckFailInfo: {
    code: 10007,
    msg: '未登录',
  },
}
