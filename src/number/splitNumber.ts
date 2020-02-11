// 分离出这个操作是因为getDecimalDigits函数和toInteger函数中都有用到

/**
 * 将一个数字转为字符串，并以特定符号分割为数组
 * 使用此函数要求调用方保证传入的参数类型
 * @param {number} [value] 待待分离的数字
 * @param {string} [mark] 分隔符
 */
function splitNumber(value: number, mark: string): string[] {
  return value.toString().split(mark);
}

export default splitNumber;
