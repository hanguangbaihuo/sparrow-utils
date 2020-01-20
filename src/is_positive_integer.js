/**
 * 验证是否为正整数
 * 
 * @author junchao
 * @date 2019-07-16
 */

// 判断正整数的正则表达式
const regexPositiveInteger = /^\d+$/;

/**
 * 验证是否为正整数
 * 
 * @param {string} str 要判断的字符串
 */
export const isPositiveInteger = function isPositiveInteger(str) {
  return regexPositiveInteger.test(str);
};
