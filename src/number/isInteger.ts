// 原实现没有考虑Infinity，es6新出Number.isInteger函数，不知小程序是否支持，兼容形式实现


/**
 * 判断是否是整数
 * @param {any} [value] 待判断的参数
 * @returns {boolean} 返回一个布尔值
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 */
function isInteger(value: any): boolean {
  return typeof value === 'number' &&
    Number.isFinite(value) &&
    Math.floor(value) === value;
}

export default Number.isInteger || isInteger;
