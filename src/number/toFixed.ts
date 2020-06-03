import isNumber from './isNumber';
import isInteger from './isInteger';
import getDigitsOfNumber from './getDigitsOfNumber';

/**
 * 将一数字按给定小数位数以四舍五入的方式处理
 * @param {any} [num] 待处理数字
 * @param {number} [digits] 大于等于0的整数
 * @returns {number}
 */
function toFixed(num: any, digits: any): number {
  if (!isNumber(num) || !isNumber(digits) || !isInteger(digits) || digits < 0) {
    return NaN;
  }
  const base = 10 ** digits;
  const numDigits = getDigitsOfNumber(num);
  // 处理整数及固定位数大于小数位数的情况
  if (digits > numDigits) {
    const deltaDigits = digits - numDigits;
    const deltaBase = 10 ** deltaDigits;
    return Number.parseFloat(`${num}.${deltaBase}`);
  }
  const res = Math.round(Math.abs(num) * base) / base;
  return num > 0 ? res : -res;
}

export default toFixed;
