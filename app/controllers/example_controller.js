/*
 * @Description: example表控制器
 * @Author: QingTong
 * @Date: 2019-02-01 16:12:17
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-08 18:27:23
 */

const Example_col = require('../models/example');

// get 请求返回所有数据
const getExample = async (ctx, next) => {
  const req = ctx.request.query;
  const examples = await Example_col.find({});
  ctx.status = 200;
  ctx.body = {
    msg: 'get request!!',
    data: {
      data: req,
      examples,
    }
  }
}

// post 带一个 msg 参数，并插入数据库
const postExample = async (ctx, next) => {
  const req = ctx.request.body;
  ctx.status = 200;
  // if (!req.msg || typeof req.msg != 'string') {
  //   ctx.status = 401;
  //   ctx.body = {
  //     msg: 'post request!!',
  //     desc: `parameter error！！msg: ${req.msg}`,
  //     data: req
  //   }
  //   return;
  // }
  const result = await Example_col.create(
    {
      // {msg: req.msg}
      "title" : "04",
      "description" : "test 04",
      "by" : "qingtong",
      "url" : "http://www.runoob.com",
      "tags" : [ 
          "mongodb", 
          "database", 
          "NoSQL"
      ],
      "likes" : 10
    },
    function(error, doc){}
  );
  ctx.body = {
    msg: 'post request!!',
    desc: 'insert success!',
    data: result
  }
}

module.exports = {
  getExample,
  postExample
}