/*
 * @Description: user router
 * @Author: qingtong 
 * @Date: 2019-02-09 10:59:03 
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-12 19:44:00
 */


const Router = require('koa-router');
const router = new Router();
const user_controller = require('../../app/controllers/user_controller');

router.get('/user/get', user_controller.get);
router.post('/user/post', user_controller.post);
router.post('/user/login', user_controller.login);
router.post('/user/register', user_controller.register);
router.post('/user/reset', user_controller.reset);

module.exports = router;

