var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
// 查找
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("config");
    dbo.collection("example"). find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

//  插入数据
// 插入一条数据 insertOne
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("config");
//     var myobj = {
//         "title" : "test create",
//         "description" : "post test create db",
//         "by" : "qingtong",
//         "url" : "http://www.runoob.com",
//         "tags" : [ 
//             "mongodb", 
//             "database", 
//             "NoSQL"
//         ],
//         "likes" : 10
//       };
//     dbo.collection("example").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });

// 插入多条数据
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("config");
//     var myobj =  [
//         {
//             "title" : "03",
//             "description" : "test 03",
//             "by" : "qingtong",
//             "url" : "http://www.runoob.com",
//             "tags" : [ 
//                 "mongodb", 
//                 "database", 
//                 "NoSQL"
//             ],
//             "likes" : 10
//         },
//         {
//             "title" : "04",
//             "description" : "test 04",
//             "by" : "qingtong",
//             "url" : "http://www.runoob.com",
//             "tags" : [ 
//                 "mongodb", 
//                 "database", 
//                 "NoSQL"
//             ],
//             "likes" : 10
//         }
//        ];
//     dbo.collection("example").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close();
//     });
// });
