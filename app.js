/*
 * @Description: 入口文件
 * @Author: QingTong
 * @Date: 2019-02-01 15:10:11
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-09 11:01:17
 */

const Koa = require('koa');
const config = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser'); //解析url传参

const app = new Koa();
mongoose.connect(config.db, { useNewUrlParser: true }, err => {
  if (err) {
    console.error('Failed to connect to database');
  } else {
    console.log('Connecting database successfully');
  }
});
app.use(bodyParser());

const example_router = require('./routes/api/example_router');
const user_router = require('./routes/api/user_router');
app.use(example_router.routes()).use(example_router.allowedMethods());
app.use(user_router.routes()).use(user_router.allowedMethods());
app.listen(config.port);





























// 创建koa服务器
// const Koa = require('koa');
// const bodyParser = require('koa-bodyparser');
// const app = new Koa();
// app.use(bodyParser());  // 解析request的body

// const router = require('koa-router')()
// router.get('/', async (ctx, next) => {
// 	// todo
// })
// app.use(router.routes());
// app.listen(9000);
// console.log('app started at port 9000...a aa')










// const Koa = require('koa');
// const bodyParser = require('koa-bodyparser');
// const app = new Koa();
// app.use(bodyParser());  // 解析request的body

// const router = require('koa-router')()
// router.get('/', async (ctx, next) => {
// 	// todo
// })
// app.use(router.routes());
// app.listen(9000);
// console.log('app started at port 9000...aaa')




// // http://www.runoob.com/nodejs/nodejs-mongodb.html
// // 连接mangodb
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
 
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("Node");
//     var whereStr = {"userId":'01'};  // 查询条件
//     dbo.collection("User").find(whereStr).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });












// var express = require('express');
// var app = express();
// app.get('/', function (req, res) {
//    res.send('Hello World');
// })
// var server = app.listen(8081, function () {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log(host)
//   console.log("应用实例，访问地址为 http://%s:%s", host, port)
// })









// var http = require('http');
// var fs = require('fs');
// var url = require('url');
// var querystring = require('querystring');

// 创建服务器
// http.createServer(function (request, response) {  
//   var body = '';
//   var pathname = url.parse(request.url).pathname;
//   console.log("Request for " + pathname + " received.");
//   // 从文件系统中读取请求的文件内容
//   fs.readFile('./src/public/index.html', function (err, data) {
//     if (err) {
//       console.log(err);
//       response.writeHead(404, {'Content-Type': 'text/html'});
//     } else { 
//       response.writeHead(200, {'Content-Type': 'text/html'});    
//       // 响应文件内容
//       response.write(data.toString()); 
//     }
//     response.end();
//   });   
// }).listen(8080);

// // 控制台会输出以下信息
// console.log('Server running at http://127.0.0.1:8080/');









// var dns = require('dns');

// dns.lookup('www.github.com', function onLookup(err, address, family) {
//    console.log('ip 地址:', address);
//    dns.reverse(address, function (err, hostnames) {
//     if (err) {
//         console.log(err.stack);
//     }

//     console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
//   });  
// });





// var net = require('net');
// var server = net.createServer(function(connection) { 
//    console.log('client connected');
//    connection.on('end', function() {
//       console.log('客户端关闭连接');
//    });
//    connection.write('Hello World!\r\n');
//    connection.pipe(connection);
// });
// server.listen(8888, function() { 
//   console.log('server is listening');
// });






// var http = require('http');
// var querystring = require('querystring');
// var postHTML = 
//   '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//   '<body>' +
//   '<form method="post">' +
//   '网站名： <input name="name"><br>' +
//   '网站 URL： <input name="url"><br>' +
//   '<input type="submit">' +
//   '</form>' +
//   '</body></html>';

// http.createServer(function(req, res) {
//   var body = '';
//   req.on('data', function(chunk) {
//     body += chunk;
//   });
//   req.on('end', function() {
//     body = querystring.parse(body);
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
//     if(body.name && body.url) { // 输出提交的数据
//       res.write("网站名：" + body.name);
//       res.write("<br>");
//       res.write("网站 URL：" + body.url);
//     } else {  // 输出表单
//       res.write(postHTML);
//     }
//     res.end();
//   });
// }).listen(3000);
// console.log('Server running at http://127.0.0.1:3000/');







// var http = require('http');
// var url = require('url');
// var util = require('util');
 
// http.createServer(function(req, res){
//   res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//   // 解析 url 参数
//   var params = url.parse(req.url, true).query;
//   res.write("网站名：" + params.name);
//   res.write("\n");
//   res.write("网站 URL：" + params.url);
//   res.end();
// }).listen(3000);







// var fs = require('fs');
// fs.open('./file/text.txt', 'r+', function(err, fd) {
//   console.log('err:' + err);
//   console.log('fd' + fd);
// });






// var fs = require('fs');

// fs.readFile('./file/text.txt', function(err, data){
//   console.log(data.toString());
// })

// var d = fs.readFileSync('./file/text.txt');
// console.log('...'+ d.toString());







// setImmediate(_ => console.log('setImmediate'))
// setTimeout(_ => console.log('setTimeout'))
// console.log(process.execPath);






// Promise.resolve().then(function promise1 () {
//   console.log('promise1');
// })
// setTimeout(function setTimeout1 (){
//   console.log('setTimeout1')
//   Promise.resolve().then(function  promise2 () {
//     console.log('promise2');
//   })
// }, 0)

// setTimeout(function setTimeout2 (){
//   console.log('setTimeout2')
// }, 0)




// sleep 函数
// var start=new Date();
// setTimeout(function cb(){
//   console.log("时间间隔：",new Date()-start+'ms');
// },500);
// while(new Date()-start<1000){};






// process.on('exit', function(code) {

//   // 以下代码永远不会执行
//   setTimeout(function() {
//     console.log("该代码不会执行");
//   }, 0);
  
//   console.log('退出码为:', code);
// });
// console.log("程序执行结束");







// var server = require('./src/server');
// var router = require('./src/route');
// server.start(router.route);





// var http = require('http');

// http.createServer(function (request, response) {

//     // 发送 HTTP 头部 
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});

//     // 发送响应数据 "Hello World"
//     response.end('Hello World\n');
// }).listen(8888);

// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');