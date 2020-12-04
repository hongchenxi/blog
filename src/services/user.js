/**
 * @description user service
 * @author ifxi
 */
const { User } = require('../db/model/index')
const {formatUser} = require('./_format.js')

/**
 *
 * @param {string} email 邮箱
 * @param {string} password 密码
 */
async function getUserInfo(email, password) {
  const whereOpt = { email }
  if (password) {
    Object.assign(whereOpt, { password })
  }
  const result = await User.findOne({
    attribute: ['id', 'email', 'nickName', 'avatar'],
    where: whereOpt,
  })
  
  if (result == null) {
    return result
  }

  const formatRes = formatUser(result.dataValues)
  return formatRes
}
/**
 * 创建用户
 * @param {Object} param0 {email, password, nickName}
 */
async function createUser({ email, password, nickName }) {
  const result = await User.create({
    email,
    password,
    nickName,
  })
  const data = result.dataValues
  return data
}

module.exports = {
  getUserInfo,
  createUser,
}
