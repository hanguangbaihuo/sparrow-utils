/**
 * 判断一个字符串是手机号
 * 
 * @author junchao
 * @date 2019-07-16
 */

// 判断手机号的正则表达式
const regexPhone = /^1\d{10}$/;

/**
 * 判断一个字符串是手机号
 * 
 * @param {string} str 要判断的字符串
 */
export const isPhone = function isPhone(str) {
  return regexPhone.test(str);
};
