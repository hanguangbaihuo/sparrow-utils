/**
 * 并行函数
 * 
 * @author minghua
 * @date   2019-07-12
 */

/**
* 并行控制函数
* @param {Array<Promise>} arr promise 组成的数组；也可以是值类型，值类型会直接返回
* @param {function} fn(err, data) 回调函数；err，错误信息；data，函数执行返回的数据。
*/
async function parallel(array, fn) {
  let data;
  try {
    data = await Promise.all(array);
    fn(null, data);
  }
  catch (err) {
    fn(err, []);
  }
}

export default parallel;
