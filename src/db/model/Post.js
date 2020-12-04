/**
 * @description 文章模型
 * @author ifxi
 */

const seq = require('../seq')
const { STRING, TEXT } = require('../types')
const Post = seq.define('post', {
  _id: {
    type: STRING,
    allowNull: false,
    unique: true,
    comment: '文章 ID， 唯一',
  },
  image: {
    type: STRING,
    allowNull: true,
    comment: '头图',
  },
  title: {
    type: STRING,
    allowNull: false,
    comment: '标题',
  },
  content: {
    type: STRING,
    allowNull: false,
    comment: '内容',
  },
  userId: {
    type: STRING,
    allowNull: false,
    comment: '用户 ID',
  },
  columnId: {
    type: STRING,
    allowNull: false,
    comment: '专栏 ID',
  },
})

module.exports = Post
