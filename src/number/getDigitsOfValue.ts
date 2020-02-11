// 和小程序中代码相比，该实现增加了判断，改为split实现

import getDigitsOfNumber from './getDigitsOfNumber';
import isNumber from './isNumber';

/**
 * 获取一个小数的小数位数
 * @param {any} [value] 待获取小数位数的参数
 * @returns {number} 返回一个整数
 */
function getDigitsOfValue(value: any): number {
  // 非数字
  if (!isNumber(value)) {
    return 0;
  }
  return getDigitsOfNumber(value);
}

export default getDigitsOfValue;
