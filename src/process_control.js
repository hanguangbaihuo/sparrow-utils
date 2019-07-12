/**
 * 流程控制函数
 * 
 * @author minghua
 * @date   2019-07-04
 */

/**
 * 串行函数
 */
async function serial(arr, fn) {
  let results = [];
  try {
    for (let i = 0, len = arr.length; i < len; i++) {
      results[i] = await arr[i]();
    }
  }
  catch (err) {
    fn(err, []);
  }
  fn(null, results);
}
