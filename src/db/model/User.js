/**
 * @description 用户数据模型
 * @author ifxi
 */

const seq = require('../seq')
const { STRING, DECIMAL } = require('../types')

const User = seq.define('user', {
  _id: {
    type: STRING,
    allowNull: false,
    unique: true,
    comment: '用户id，唯一'
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    comment: '邮箱，唯一',
  },
  password: {
    type: STRING,
    allowNull: false,
    comment: '密码',
  },
  nickName: {
    type: STRING,
    allowNull: true,
    comment: '昵称',
  },
  avatar: {
    type: STRING,
    allowNull: true,
    comment: '头像',
  },
})

module.exports = User
