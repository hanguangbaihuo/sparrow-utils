/**
 * 延时执行函数
 * 
 * @author minghua
 * @date   2019-07-12
 */

/**
 * 延时执行函数
 * 
 * @param {ms} time 要延时的毫秒数 
 * @param {function} fn 要延时执行的函数
 */
async function delay(time, fn) {
  const promiseDelay = new Promise((resolve, reject) => {
    setTimeout(resolve, time, 'success');
  });
  await promiseDelay;
  fn();
}

export default delay;
