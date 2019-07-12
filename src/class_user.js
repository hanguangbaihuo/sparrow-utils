/**
 * 用户信息帮助类
 * 
 * @author minghua
 * @date   2019-07-12
 */

// 存入本地存储的键名
const sparrow_key_user = 'sparrow-key-user';

// 用户类
class User {

  constructor() {
    this.currentUserInfo = null;
    this.instance = null;
  }

  // 存储用户登录信息
  setUserInfo(userInfo) {
    this.currentUserInfo = userInfo;
    localStorage.setItem(sparrow_key_user, userInfo);
  }

  // 获取用户信息
  getUserInfo() {
    if (this.currentUserInfo) {
      return this.currentUserInfo;
    }
    return JSON.parse(localStorage.getItem(sparrow_key_user));
  }

  // 用户登录
  login(userInfo) {
    this.setUserInfo(userInfo);
  }

  // 用户退出
  logout() {
    this.currentUserInfo = null;
    localStorage.removeItem(sparrow_key_user);
  }

  // 单例模式
  static getInstance() {
    if (!this.instance) {
      this.instance = new User();
    }
    return this.instance;
  }

}

export default new User.getInstance();
