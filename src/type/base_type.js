/**
 * 类型判断
 * @param {*} obj 需要判断类型的数据 
 */
const baseType = (obj) => {
  const toString = Object.prototype.toString;
  const map = {
    '[object Array]': 'array',
    '[object Object]': 'object',
  };
  console.log('----> 类型判断：', toString.call(obj));
  return map[toString.call(obj)];
};

export default baseType;