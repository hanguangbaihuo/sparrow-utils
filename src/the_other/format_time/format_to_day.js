/**
 * 格式化时间，精确到天
 * 
 * @author junchao
 * @date 2019-07-16
 * @example '2019-07-16'
 */

export const formatToDay = function formatToDay(mescStr) {
  let date = new Date(mescStr);
  let year = date.getFullYear();
  let month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  return (`${year}-${month}-${day}`)
}
