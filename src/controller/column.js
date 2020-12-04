/**
 * @description column controller
 * @author ifxi
 */

const { createColumnFailInfo } = require('../model/ErrorInfo')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { createColumn } = require('../services/column')
/**
 * 创建专栏
 * @param {Object} param0 { title, descript }
 */
async function create({ userId, title, descript }) {
  try {
    await createColumn({ userId, title, descript })
    return new SuccessModel()
  } catch (ex) {
    console.error(ex.message, ex.stack)
    return new ErrorModel(createColumnFailInfo)
  }
}

module.exports = {
  create,
}
