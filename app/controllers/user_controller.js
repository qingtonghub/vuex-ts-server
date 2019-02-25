/*
 * @Description: user controller api
 * @Author: qingtong 
 * @Date: 2019-02-09 10:51:29 
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-15 11:57:00
 */


const User_col = require('./../models/user');
const Passport_col = require('./../models/password');
const uuidv1 = require('uuid/v1');
const config = require('./../../config');
const passport = require('./../utils/passport');
// 基于jwt的token验证
const JwtUtil = require('../utils/jwt');

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
    const data = {
        Success: false,
        Msg: '',
        Data: null
    };
    // console.log(req);
    if(!req.phone || !req.password) {
        data.Msg = '手机号密码不能为空';
    } else {
        // 通过手机号获取user
        const user = await User_col.findOne({
            phone: req.phone
        });
        // console.log(user)
        if(!user) {
            data.Msg = '手机号密码错误';
        } else {
            const userId = user.userId;
            console.log(userId);
            // 通过userId获取数据库Password表中的 hash
            const pass = await Passport_col.findOne({
                userId
            });
            // hash对比密码
            const match = await passport.validate(req.password, pass.hash);
            // console.log('match====' + match);
            if(!match) {
                data.Msg = '手机号密码错误';
            } else {
                // const jwt = new JwtUtil(userId);
                // const token = jwt.generateToken();
                data.Success = true;
                data.Msg = '';
                data.Data = {
                    userId
                };
            }
            // console.log('pass====:'+pass);
        }
    }
    ctx.status = 200;
    ctx.body = data;
}

// 注册
const register = async (ctx, next) => {
    const req = ctx.request.body;
    const data = {
        Success: false,
        Msg: '',
        Data: null
    };
    if(!req.phone || !req.password) {
        data.Msg = '手机号密码不能为空';
    } else {
        // 通过手机号获取user
        const user = await User_col.findOne({
            phone: req.phone
        });
        // console.log(user)
        if (user) {
            data.Msg = '该手机已经注册';
        } else {
            // 插入新用户
            const userId = uuidv1();
            const newUser = await User_col.create({
                userId,
                phone: req.phone
            });
            if (newUser) {
                // 加密
                const hash = await passport.encrypt(req.password, config.saltTimes);
                const result = await Passport_col.create({
                    userId: userId,
                    hash
                });
                if (result) {
                    data.Success = true;
                    data.Msg = '';
                    data.Data = {
                        userId: newUser.userId,
                        phone: newUser.phone
                    };
                } else {
                    data.Msg = '注册失败！';
                }
            } else {
                data.Msg = '注册失败！';
            }
        }
    }
    ctx.status = 200;
    ctx.body = data;
}

// 重置密码
const reset = async (ctx, next) => {
    const req = ctx.request.body;
    const data = {
        Success: false,
        Msg: '',
        Data: null
    };
    if (!req.phone || !req.password) {
        data.Msg = '手机号密码不能为空';
    } else {
        // 通过手机号获取user
        const user = await User_col.findOne({
            phone: req.phone
        });
        // console.log(user)
        if (!user) {
            data.Msg = '数据库无该手机号';
        } else {
            const userId = user.userId;
            console.log(userId);
            // 加密
            const hash = await passport.encrypt(req.password, config.saltTimes);
            // 通过userId修改数据库Password表中的 hash
            const result = await Passport_col.update({
                userId
            }, {
                $set: {
                    hash
                }
            });
            if (result) { 
                data.Success = true;
                data.Msg = '';
                data.Data = null;
            } else {
                data.Msg = '重置密码失败';
            }
        }
    }
    ctx.status = 200;
    ctx.body = data;
}

module.exports = {
    get,
    post,
    login,
    register,
    reset
}