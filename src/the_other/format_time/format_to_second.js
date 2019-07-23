/**
 * 格式化时间，精确到日
 * 
 * @author junchao
 * @date 2019-07-16
 * @example '13:02:05'
 */

export const format_to_second = function format_to_second(mescStr) {
  let date = new Date(mescStr);
  let hour = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
  let minute = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
  let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return (`${hour}:${minute}:${second}`);
}
