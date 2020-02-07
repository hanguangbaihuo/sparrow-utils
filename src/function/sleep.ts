/**
 * 以固定时间阻塞线程下一轮的执行
 * @param {number} [t]-阻塞线程的时长，以ms计
 * @returns {Promise} -返回为resolved状态的promise对象，无有效值
 * @see https://stackoverflow.com/a/39914235
 */
function sleep(t: number): Promise<any> {
  return new Promise((resolve) => setTimeout(resolve, t));
}

export default sleep;
