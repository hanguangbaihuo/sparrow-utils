import { factoryForAddAndSubtract } from './factory';


/**
 * 用以处理两个数字相加，结果小数位数和参数最大小数位数相同
 * 若参数中有非数字，返回NaN，不进行隐式转换
 * @param {number} [num1] 数字1
 * @param {number} [num2] 数字2
 * @returns {number}
 */
const add = factoryForAddAndSubtract('+');

export default add;
