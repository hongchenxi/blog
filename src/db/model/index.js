/**
 * @description 数据模型入口文件
 * @author ifxi
 */
const User = require('./User')
const Column = require('./Column')
const Post = require('./Post')

Column.belongsTo(User, {
  foreignKey: 'userId',
  targetKey: '_id',
})

module.exports = {
  User,
  Column,
  Post,
}
