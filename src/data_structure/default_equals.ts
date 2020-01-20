/**
 * 默认的相等性比较函数；使用 Object.is() 函数判断是否相等。
 * @param {any} [a] 第一个需要比较的值
 * @param {any} [b] 第二个需要比较的值
 * @return {Boolean} 返回值
 * @example
 * // return true
 * defaultEquals(1, 1);
 */
export default function defaultEquals(a: any, b: any): Boolean {
  return Object.is(a, b);
}
