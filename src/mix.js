/**
 * mix
 * 
 * @author 明华
 * @date   2019-06-21
 * @update 2019-06-22
 */

import isPlainObject from './type/is_plain_object';

/**
 * 对象拷贝
 */
function mix() {

  let options; // 选项，arguments[i] 的值
  let name;
  let src;
  let copy;
  let copyIsArray;
  let clone;
  let target = arguments[0] || {}; // 接受方，copy属性的接受对象
  let i = 1; // arguments 下标
  let len = arguments.length;
  let deep = false;

  // 如果第一个参数是布尔值，判定是否深拷贝
  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {};
    i++;
  }

  // 确保接受方为一个复杂的数据类型
  if (typeof target !== 'object') {
    target = {};
  }

  for (; i < len; i++) {
    // 只处理非空参数
    if ((options = arguments[i]) != null) {
      for (name in options) {
        src = target[name];
        copy = options[name];

        // 防止坏引用
        if (target === copy) {
          continue;
        }

        copyIsArray = Array.isArray(copy);

        if (deep && copy && (isPlainObject(copy) || copyIsArray)) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && isPlainObject(src) ? src : {};
          }
          target[name] = mix(deep, clone, copy);
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  return target;

}

export default mix;
