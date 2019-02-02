/*
 * @Description: example路由
 * @Author: QingTong
 * @Date: 2019-02-01 16:18:16
 * @Last Modified by: QingTong
 * @Last Modified time: 2019-02-01 16:21:01
 */

const Router = require('koa-router');
const router = new Router();
const example_controller = require('../../app/controllers/example_controller');

router.get('/example/get', example_controller.getExample);
router.post('/example/post', example_controller.postExample);

module.exports = router;


