/*
 * @Description: 对密码进行加密 对比操作
 * @Author: qingtong 
 * @Date: 2019-02-08 19:58:00 
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-08 19:59:02
 */

const bcrypt = require('bcrypt');
const encrypt = async (password, saltTimes) => {
    const hash = await bcrypt.hash(password, saltTimes);
    return hash; 
};

const validate = async (password, hash) => {
    const match = await bcrypt.compare(password, hash);
    return match;
};

module.exports = {
    encrypt,
    validate
}