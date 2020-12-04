/**
 * @description column service
 * @author ifxi
 */
const { Column } = require('../db/model/index')
const { v4: uuidv4 } = require('uuid')
/**
 *  创建专栏
 * @param {*} param0 { title, descript }
 */
async function createColumn({ userId, title, descript }) {
  const result = await Column.create({
    _id: uuidv4(),
    userId,
    title,
    descript,
  })
  return result.dataValues
}

module.exports = {
  createColumn,
}
