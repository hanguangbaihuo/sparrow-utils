/**
 * 返回字符串中从mark到结尾的子串
 * 
 * @author junchao
 * @date 2019-07-16
 */

/**
 * 返回字符串中从mark到结尾的子串
 * 
 * @param {string} str 要截取的字符串
 * @param {string} mark 要截取的位置
 */
export const returnEndSubstr = function returnEndSubstr(str, mark) {
  return str.substring(str.indexOf(mark) + 1, str.length);
};