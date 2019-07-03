/**
 * 判断两个对象是否相同
 * 
 * @author minghua
 * @date 2019-07-03
 */

// 判断中文的正则表达式
const regexChinese = /.*[\u4e00-\u9fa5]+.*$/;

/**
 * 判断一个字符串/URL中是否含有中文字符
 * 
 * @param {string} val 要判断的字符串
 * 
 * @return {boolean} 返回布尔值，true为包含，false为不包含
 */
export const hasChineseChar = function hasChinseChar(val) {
  return regexChinese.test(val);
};
