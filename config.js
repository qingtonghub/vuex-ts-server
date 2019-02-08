/*
 * @Description: mongoDB配置文件
 * @Author: QingTong
 * @Date: 2019-02-01 15:17:01
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-08 19:51:33
 */

module.exports = {
  port: 3001,
  db: 'mongodb://localhost:27017/Node',
  saltTimes: 3  //密码加密次数 
};