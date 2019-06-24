/**
 * 是否为原生对象
 * 
 * @author  minghua
 * @date    2019-06-22
 */

function isPlainObject(obj) {
  return typeof obj === 'object' && Object.getPrototypeOf(obj) === obj.prototype;
}

export default isPlainObject;
