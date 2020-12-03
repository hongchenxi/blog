/**
 * @description 存储配置
 * @author ifxi
 */

const { isProd } = require('../utils/env')

let MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: 'ifxi0922.',
  port: '3306',
  database: 'blog',
}

// 线上配置
if (isProd) {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'ifxi0922.',
    port: '3306',
    database: 'blog',
  }
}

module.exports = {
  MYSQL_CONF,
}
