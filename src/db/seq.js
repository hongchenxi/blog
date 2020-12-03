/**
 * @description sequelize 实例
 * @author ifxi
 */

const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { isProd } = require('../utils/env')

const { host, user, password, database } = MYSQL_CONF
let conf = {
  host,
  dialect: 'mysql',
}

if (isProd) {
  conf.pool = {
    max: 5,
    min: 0,
    idle: 1000,
  }
}

const seq = new Sequelize(database, user, password, conf)

module.exports = seq
