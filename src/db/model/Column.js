/**
 * @description 专栏模型数据
 * @author ifxi
 */
const seq = require('../seq')
const { STRING } = require('../types')
const Column = seq.define('column', {
  _id: {
    type: STRING,
    allowNull: false,
    unique: true,
    comment: '专栏 ID， 唯一',
  },
  title: {
    type: STRING,
    allowNull: false,
    comment: '标题',
  },
  descript: {
    type: STRING,
    allowNull: false,
    comment: '描述',
  },
  avatar: {
    type: STRING,
    allowNull: true,
    comment: '头像',
  },
  userId: {
    type: STRING,
    allowNull: false,
    comment: '用户 ID',
  },
})

module.exports = Column
