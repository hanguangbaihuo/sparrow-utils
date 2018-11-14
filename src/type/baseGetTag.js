const objectPrototype = Object.prototype;
const hasOwnProperty = objectPrototype.hasOwnProperty;
const toString = objectPrototype.toString;
const symbolToStringTag = typeof Symbol != 'undefined' ? Symbol.toStringTag : undefined;

/**
 * 获取基本类型
 * 
 * @private
 * @param {*} value 要查询的值
 * @returns {string} 
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
};