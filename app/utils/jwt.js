/*
 * @Description: jwt token生成器
 * @Author: qingtong
 * @Date: 2019-02-14 22:23:55
 * @Last Modified by: qingtong
 * @Last Modified time: 2019-02-25 22:57:46
 */

const jwt = require('jsonwebtoken');

class Jwt {
  constructor(data) {
    this.data = data;
  }
  // 生成token
  generateToken() {
    const data = this.data;
    const created = Math.floor(Date.now() / 1000);
    const cert = 'qwert'; //私钥 可以自己生成
    const token = jwt.sign({
        data,
        exp: created + 60 * 30,
    }, cert, { algorithm: 'RS256' });
    return token;
  }
  // 验证token
  verifyToken() {
    const token = this.data;
    const cert = 'qwert'; //公钥 可以自己生成
    let res;
    try {
      const result = jwt.verify(token, cert, { algorithms: ['RS256'] }) || {};
      const { exp = 0 } = result, current = Math.floor(Date.now() / 1000);
      if (current <= exp) {
        res = result.data || {};
      }
    } catch (e) {
      res = 'err';
    }
    return res;
  }
}

const jj = new Jwt({
  userId: 'xxxxasdgdfg',
});
const token = jj.generateToken();
console.log(token);

// module.exports = Jwt;