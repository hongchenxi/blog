/**
 * @description user 数据格式校验
 * @author ifxi
 */

const validate = require('./_validator')

const SCHEMA = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      pattern:
        '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$',
      maxLength: 255,
      minLength: 8,
    },
    nickName: {
      type: 'string',
      maxLength: 255,
    },
    password: {
      type: 'string',
      maxLength: 255,
      minLength: 3,
    },
    repeatPassword: {
      type: 'string',
      maxLength: 255,
      minLength: 3,
    },
  },
}

/**
 * 校验用户数据
 * @param {Object} data  用户数据
 */
function userValidate(data = {}) {
  return validate(SCHEMA, data)
}

module.exports = userValidate
