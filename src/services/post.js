/**
 * @description post services
 * @author ifxi
 */

const { Post } = require('../db/model/index')
const { v4: uuidv4 } = require('uuid')

/**
 * 新建文章
 * @param {Object} param0 { userId, columnId, title, content }
 */
async function createPost({ userId, columnId, title, content }) {
  const result = await Post.create({
    _id: uuidv4(),
    userId,
    columnId,
    title,
    content,
  })
  return result.dataValues
}

/**
 * 获取文章详情
 * @param {string} postId 文章 ID
 */
async function postDetail(postId) {
  const result = await Post.findOne({
    _id: postId,
  })
  return result.dataValues
}
module.exports = {
  createPost,
  postDetail,
}
