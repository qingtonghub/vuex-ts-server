/*
 * @Description: example表并定义表字段
 * @Author: QingTong
 * @Date: 2019-02-01 15:42:59
 * @Last Modified by: QingTong
 * @Last Modified time: 2019-02-01 17:44:34
 */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exampleSchema = new Schema({  // 使用 Schema 创建集合结构(表结构)
  title: { type:String },
  description: { type:String },
  by: { type:String },
  url: { type:String},
  tags: { type:Array },
  likes: { type:Number, default:0 },
}, {
  collection: 'example', // 这里是为了避免新建的表会带上 s 后缀
  versionKey: false // 不需要 __v 字段，默认是加上的
});
module.exports = mongoose.model('example', exampleSchema);


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const exampleSchema = new Schema({
//   msg: {
//     type: String,
//     required: true
//   },
// }, { 
//   collection: 'example', // 这里是为了避免新建的表会带上 s 后缀
//   versionKey: false // 不需要 __v 字段，默认是加上的
// });

// module.exports = mongoose.model('example', exampleSchema);

