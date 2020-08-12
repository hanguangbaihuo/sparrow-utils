// 原实现没有考虑Infinity，es6新出Number.isInteger函数，不知小程序是否支持，兼容形式实现

/**
 * 判断是否是整数
 * js原生有整数判断函数：Number.isInteger
 * 建议使用的时候先确定平台是否支持或者以这种形式使用
 * Number.isInteger || isInteger;
 * @param {any} [value] 待判断的参数
 * @returns {boolean} 返回一个布尔值
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 */
function isInteger(value: any): boolean {
  return typeof value === 'number' &&
    Number.isFinite(value) &&
    Math.floor(value) === value;
}

export default isInteger;
