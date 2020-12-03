/**
 * @description 环境变量
 * @author ifxi
 */

const EVN = process.env.NODE_ENV
module.exports = {
  isDev: ENV === 'dev',
  notDev: ENV !== 'dev',
  isProd: ENV === 'production',
  notProd: ENV !== 'production',
  isTest: EVN === 'test',
  notTest: EVN !== 'test',
}
