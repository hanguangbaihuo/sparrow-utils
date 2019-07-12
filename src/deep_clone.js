/**
 * 深拷贝
 * 
 * @author minghua
 * @date   2019-06-24
 */

import isPlainObject from './type/is_plain_object';

/**
 * 深拷贝
 * 
 * @param {object|array} target 深拷贝的接受方
 * @param  {...object|array} source 深拷贝的数据来源方
 * 
 * @returns object
 */
function deepClone(target = {}, ...source) {
  // 确保接受方式是一个复杂的数据类型
  if (typeof target !== 'object') {
    target = {};
  }

  // 循环source里边的每个对象
  for (let i = 0; i < source.length; i++) {

    // 被拷贝对象
    const options = source[i];

    // 被拷贝对象不为 null 或 undefined 
    if (options != null) {
      // 循环options对象中的每个属性
      for (let name in options) {
        let clone;
        let src = target[name];
        let copy = options[name];

        // 防止坏引用
        if (src === copy) {
          continue;
        }

        // 如果被拷贝对象 copy 是原生对象或者数组时，递归调用
        // 否则为目标对象 target 赋值
        if (isPlainObject(copy)) {
          // 目标为对象时
          clone = src && isPlainObject(src) ? src : {};
          target[name] = deepClone(clone, copy);
        } else if (Array.isArray(copy)) {
          // 目标为数组时
          clone = src && Array.isArray(src) ? src : [];
          target[name] = deepClone(clone, copy);
        } else {
          // 目标为值类型时
          target[name] = copy;
        }
      }
    }
  }

  return target;

}

export default deepClone;
