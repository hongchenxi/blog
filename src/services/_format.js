/**
 * @description 数据格式化
 * @author ifxi
 */

const { DEFAULT_NICKNAME } = require('../conf/constant')

function _formatUserNickName(obj) {
  if (obj.nickName == null) {
    obj.nickName = DEFAULT_NICKNAME
  }
  return obj
}

function formatUser(list) {
  if (list == null) {
    return list
  }
  if (list instanceof Array) {
    return list.map(_formatUserNickName)
  }
  return _formatUserNickName(list)
}


module.exports = {
  formatUser
}