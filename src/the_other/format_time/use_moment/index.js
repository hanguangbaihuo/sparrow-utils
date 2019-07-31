import moment from 'moment';
// import moment from './moment/moment.js';
/**
 * 利用moment进行时间格式化
 * 
 * @author junchao
 * @date 2019-07-16
 * @url http://momentjs.cn/
 */


/**
 * 今天，今天00:00:00到当前时刻
 * @example {start:'2019-07-16 00:00:00',end:'2019-07-16 16:40:30'}
 */
export const returnToday = function returnToday() {
  let startDate = moment().startOf('day').format('YYYY-MM-DD');
  let startTime = moment().startOf('day').format('HH:mm:ss');
  let endDate = moment().format('YYYY-MM-DD');
  let endTime = moment().format('HH:mm:ss');
  return {
    start: `${startDate} ${startTime}`,
    end: `${endDate} ${endTime}`,
  }
};

/**
 * 本月，本月1日00:00:00到当前时刻
 * @example {start:'2019-07-01 00:00:00',end:'2019-07-16 16:40:30'}
 */
export const returnThisMonth = function returnThisMonth() {
  let startDate = moment().startOf('month').format('YYYY-MM-DD');
  let startTime = moment().startOf('month').format('HH:mm:ss');
  let endDate = moment().format('YYYY-MM-DD');
  let endTime = moment().format('HH:mm:ss');
  return {
    start: `${startDate} ${startTime}`,
    end: `${endDate} ${endTime}`,
  }
};

