/*
 * @Description: user Model
 * @Author: qingtong 
 * @Date: 2019-02-09 10:49:15 
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-09 11:03:11
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    userId: {
      type: String,
      unique: true,
      require: true
    },
    account: {
      type: String
    },
    userName: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    headerImg: {
      type: String
    },
    studentId: {
      type: String
    },
    school: {
      type: String
    },
    schoolId: {
      type: String
    },
    provinceId: {
      type: Number
    },
    major: {
      type: String
    },
    college: {
      type: String
    },
    wechat: {
      type: String
    },
    qq: {
      type: String
    },
    collections: {
      type: Array
    } 
  }, { collection: 'User', versionKey: false});
module.exports = mongoose.model('User', UserSchema);
