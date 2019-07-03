/**
 * 判断两个数组是否相等
 * 
 * 不适用于复杂数据结构
 * 
 * @author minghua
 * @date   2019-07-03
 */

/**
 * 判断两个数组是否相等
 * 
 * 先将两个数组排序，然后转化成字符串进行比较。
 * 注：此方法对复杂数组结构不适用！！！ 
 */
export const isArrayEqual = function isArrayEqual(x, y) {
  // 如果两个数组的长度不一样，返回false
  if (x.length !== y.length) {
    return false;
  }
  // return JSON.stringify(x.sort()) === JSON.stringify(y.sort());
  return x.sort().toString() === y.sort().toString();
};
