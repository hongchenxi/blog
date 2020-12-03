/**
 * @description json schema 校验
 * @author ifxi
 */

const Ajv = require('ajv')
const ajv = new Ajv({})

/**
 * json schema 校验
 * @param {*} schema  json schema 校验规则
 * @param {*} data 待校验待数据
 */
function validate(schema, data = {}) {
  const valid = ajv.validate(schema, data)
  if (!valid) {
    return ajv.errors[0]
  }
}

module.exports = validate
