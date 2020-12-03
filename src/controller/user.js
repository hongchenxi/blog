/**
 * @description user controller
 * @author ifxi
 */

const {
  registerUserNameExistInfo,
  registerFailInfo,
} = require('../model/ErrorInfo')
const { ErrorModel, SuccessModel } = require('../model/ResModel')
const doCrypto = require('../utils/cryp')
const { createUser } = require('../services/user')

/**
 * 注册
 * @param {Object} param0 {email, password, nickName}
 */
async function register({ email, password, nickName }) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    return new ErrorModel(registerUserNameExistInfo)
  }
  try {
    await createUser({
      email,
      password: doCrypto(password),
      nickName,
    })
    return new SuccessModel()
  } catch (ex) {
    console.error(ex.message, ex.stack)
    return new ErrorModel(registerFailInfo)
  }
}
