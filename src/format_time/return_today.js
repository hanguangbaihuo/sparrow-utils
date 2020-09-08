import format_to_day from './format_to_day';
import format_to_second from './format_to_second';

/**
 * 返回今天这一时间段，今天00:00:00到当前时刻
 * 
 * @author junchao
 * @date 2019-07-16
 * @example {start:'2019-07-16 00:00:00',end:'2019-07-16 16:40:30'}
 */

export const returnToday = function returnToday() {
  let now = new Date();
  let startDate = format_to_day(now);
  let startTime = "00:00:00";
  let endDate = format_to_day(now);
  let endTime = format_to_second(now);
  return {
    start: `${startDate} ${startTime}`,
    end: `${endDate} ${endTime}`,
  }
};
