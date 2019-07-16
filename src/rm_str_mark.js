/**
 * 除去字符串中符号
 * 
 * @author junchao
 * @date 2019-07-16
 */

/**
 * 除去字符串中符号
 * 
 * @param {String} str 要处理的数字
 * @param {String} mark 要移除的符号
 */
export const removeStringMark = function removeStringMark(str, mark) {
  // 通过 prototype 为 JavaScript 的 String 对象添加方法，来实现将所有 " " 替换为 ""
  String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };
  return str.replaceAll(mark, "");
};
