/**
 * 串行函数
 * 
 * @author minghua
 * @date   2019-07-12
 */

/**
 * 串行控制函数
 * @param {Array<function>} arr 函数组成的数组；可以是普通函数、async函数、promise
 * @param {function} fn(err, data) 回调函数；err，错误信息；data，函数执行返回的数据。
 */
async function serial(arr, fn) {
  let data = [];
  try {
    for (let i = 0, len = arr.length; i < len; i++) {
      data[i] = await arr[i]();
    }
    fn(null, data);
  }
  catch (err) {
    fn(err, []);
  }
}

export default serial;
