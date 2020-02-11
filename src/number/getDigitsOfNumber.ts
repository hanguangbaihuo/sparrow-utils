import splitNumber from './splitNumber';

/**
 * 获取一个小数的小数位数
 * @param {number} [value] 待获取小数位数的参数
 * @returns {number} 返回一个整数
 */
function getDigitsOfNumber(value: number): number {
  return (splitNumber(value, '.')[1] || '').length;
}
export default getDigitsOfNumber;
