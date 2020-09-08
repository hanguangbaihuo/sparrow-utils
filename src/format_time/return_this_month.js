import format_to_day from './format_to_day';
import format_to_second from './format_to_second';

/**
 * 返回当月这一时间段，本月1号00:00:00到当前时刻
 * 
 * @author junchao
 * @date 2019-07-23
 * @example {start:'2019-07-01 00:00:00',end:'2019-07-23 15:56:30'}
 */

export const returnThisMonth = function returnThisMonth() {

  let now = new Date();
  let startDate = transThisMonth(now);
  let startTime = "00:00:00";
  let endDate = format_to_day(now);
  let endTime = format_to_second(now);
  return {
    start: `${startDate} ${startTime}`,
    end: `${endDate} ${endTime}`,
  }
};

/**
 * 获取本月的时间
 */
function transThisMonth(mescStr) {
  let date = new Date(mescStr);
  let year = date.getFullYear();
  let month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let day = '01';
  return (`${year}-${month}-${day}`)
}
