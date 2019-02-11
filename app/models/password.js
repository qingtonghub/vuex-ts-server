/*
 * @Description: password Model
 * @Author: qingtong 
 * @Date: 2019-02-11 14:08:40 
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-11 14:32:28
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PasswordSchema = new Schema({
  userId: {
    type: String,
    unique: true,
    required: true
  },
  hash: {
    type: String,
    required: true
  }
}, { collection: 'Password', versionKey: false});

module.exports = mongoose.model('password', PasswordSchema);