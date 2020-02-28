// 这个文件中的函数为工厂类函数
// 不对外导出，无测试

import isNumber from './isNumber';
import getDigitsOfNumber from './getDigitsOfNumber';
import toFixed from './toFixed';

// 这个函数用来生成两个数字相加或相减的函数
function factoryForAddAndSubtract(mark: string) {
  return (num1: any, num2: any): number => {
    if (!isNumber(num1) || !isNumber(num2)) {
      return NaN;
    }
    const num1Digits = getDigitsOfNumber(num1);
    const num2Digits = getDigitsOfNumber(num2);
    const baseDigits = Math.max(num1Digits, num2Digits);
    const handledNum2 = mark === '-' ? -num2 : num2;
    return toFixed(num1 + handledNum2, baseDigits);
  };
}

function factoryForMultiplyAndDevide(mark: string) {
  return (num1: any, num2: any): (number | undefined) => {
    if (!isNumber(num1) || !isNumber(num2)) {
      return NaN;
    }
    const num1Digits = getDigitsOfNumber(num1);
    const num2Digits = getDigitsOfNumber(num2);
    const baseDigits = Math.max(num1Digits, num2Digits);
    const tempNum = mark === '*' ? (num1 * num2) : (num1 / num2);
    return toFixed(tempNum, baseDigits);
  };
}

export {
  factoryForAddAndSubtract,
  factoryForMultiplyAndDevide,
};
