/**
 * 截取指定位置的字符串
 * 
 * @author junchao
 * @date 2019-07-16
 */

/**
 * 截取指定位置的字符串
 * 
 * @param {String} str 要截取的字符串
 * @param {String} start 开始位置（包含）
 * @param {String} end 结束位置（不包含）
 */
export const subString = function subString(str, start, end) {
  return str.slice(start, end);
};
