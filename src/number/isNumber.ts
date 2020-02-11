// 小程序中该函数的实现感觉不直观，会涉及隐式转换
// 遂更改实现

/**
 * 判断是否是数字类型
 * @param {any} [value] 需要判断的参数
 * @returns {boolean} 返回一个布尔值
 */
function isNumber(value: any): boolean {
  return typeof value === 'number' && !Number.isNaN(value);
}

export default isNumber;
