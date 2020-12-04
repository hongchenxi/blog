/**
 * @description user controller
 * @author ifxi
 */

const {
  registerUserNameExistInfo,
  registerFailInfo,
  loginFailInfo
} = require('../model/ErrorInfo')
const { ErrorModel, SuccessModel } = require('../model/ResModel')
const doCrypto = require('../utils/cryp')
const { getUserInfo, createUser } = require('../services/user')
const jwt = require('jsonwebtoken')
const { JWT_SECRET_KEY } = require('../conf/secretKeys.js')
/**
 * 注册
 * @param {Object} param0 {email, password, nickName}
 */
async function register({ email, password, nickName }) {
  const userInfo = await getUserInfo(email)
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
/**
 * 登录
 * @param {*} param0 { ctx, email, password }
 */
async function login({ ctx, email, password }) {
  const userInfo = await getUserInfo(email, doCrypto(password)) 
  if (!userInfo) {
    return new ErrorModel(loginFailInfo)
  }

  const token = jwt.sign({email}, JWT_SECRET_KEY, {expiresIn: '1d'}) // 过期时间：1天
  console.log('login()', token)
  return new SuccessModel({
    token: token
  })

}

module.exports = {
  register,
  login,
}
