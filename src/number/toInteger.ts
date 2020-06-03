import isInteger from './isInteger';
import isNumber from './isNumber';
import splitNumber from './splitNumber';

/**
 * 将一个浮点数转成一个整数，返回整数和倍数。
 * @param {any} [value] 待转换的参数
 * @returns {int: number, times: number}
 * @example 3.14 >> 整数 314，倍数 100
 */
function toInteger(value: any): {
  times: number;
  int: number;
} {
  // 非数字情况直接返回这个初始化的result
  const result = {
    times: 0,
    int: 0,
  };
  // 处理整数
  if (isInteger(value)) {
    result.times = 1;
    result.int = value;
  } else if (isNumber(value)) {
    // 处理小数
    const [int, float] = splitNumber(value, '.');
    result.times = 10 ** float.length;
    result.int = Number.parseInt(int + float, 10);
  }
  return result;
}

export default toInteger;
