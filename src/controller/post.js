/**
 * @description post controller
 * @author ifxi
 */

const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { createPostFailInfo } = require('../model/ErrorInfo')
const { createPost, postDetail } = require('../services/post')
/**
 * 新建文章
 * @param {Object} param0 { userId, columnId, title, content }
 */
async function create({ userId, columnId, title, content }) {
  try {
    await createPost({ userId, columnId, title, content })
    return new SuccessModel()
  } catch (ex) {
    console.error(ex.message, ex.stack)
    return new ErrorModel(createPostFailInfo)
  }
}

/**
 * 获取文章详情
 * @param {string} postId 文章 ID
 */
async function deatil(postId) {
  try {
    const result = await postDetail(postId)
    return new SuccessModel(result)
  } catch (ex) {
    console.error(ex.message, ex.stack)
    return new ErrorModel(createPostFailInfo)
  }
}

/**
 * 修改文章
 * @param {string} postId 文章 ID
 */
async function modifyPost(postId) {}

/**
 * 删除文章
 * @param {string} postId 文章 ID
 */
async function deletePost(postId) {}

module.exports = {
  create,
  deatil,
  modifyPost,
  deletePost,
}
