import sleep from './sleep';

/**
 * 延迟一个函数的执行
 * @param {function} [func]-业务函数
 * @param {number} [t]-延迟时间
 * @returns {function} -返回一个async函数，参数是func函数所需参数，结果是func函数的运行结果,以promise的形式返回
 * @example
 * const log = delay(console.log, 3000);
 * log('3s后输出这段文字');
 */
function delay(func: any, t: number):any {
  return async (...args:any[]):Promise<any> => {
    await sleep(t);
    // eslint-disable-next-line prefer-spread
    const res = await func.apply(null, args);
    return res;
  };
}

export default delay;
