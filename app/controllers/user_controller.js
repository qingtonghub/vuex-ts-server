/*
 * @Description: user controller api
 * @Author: qingtong 
 * @Date: 2019-02-09 10:51:29 
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-09 21:07:28
 */


const User_col = require('./../models/user');
// const Passport_col = require('./../models/password');
const uuidv1 = require('uuid/v1');
const config = require('./../../config');
const passport = require('./../utils/passport');

// test get
const get = async (ctx, next) => {
    ctx.status = 200;
    const d = await User_col.find({});
    ctx.body = {
        msg: 'get request success!!',
        data: {
            data: ctx.request.query
        }
    }
}

// test post
const post = async (ctx, next) => {
    ctx.status = 200;
    const d = await User_col.find({});
    ctx.body = {
        msg: 'post request success!!',
        data: {
            data: ctx.request.body,
            d
        }
    }
}

// login
const login = async (ctx, next) => {
    const req = ctx.request.body;
    console.log(req);
    // 获取用户的 phone
    const user = await User_col.findOne({
        phone: req.phone
    });
    console.log(user)
    if(!user) {
        ctx.status = 200;
        ctx.body = {
            code: 0,
            msg: 'account or password error!'
        }
        return;
    }
    ctx.status = 200;
        ctx.body = {
            code: 0,
            phone: req.phone,
            msg: 'login success'
        }
        return;
}

module.exports = {
    get,
    post,
    login
}