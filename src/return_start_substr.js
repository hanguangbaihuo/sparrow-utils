/**
 * 返回字符串中从开头到mark的子串
 * 
 * @author junchao
 * @date 2019-07-16
 */

/**
 * 返回字符串中从开头到mark的子串
 * 
 * @param {string} str 要截取的字符串
 * @param {string} mark 要截取的位置
 */
export const returnStartSubstr = function returnStartSubstr(str, mark) {
  return str.substring(0, str.indexOf(mark));
};