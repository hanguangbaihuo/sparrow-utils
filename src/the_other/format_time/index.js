/**
 * 利用moment进行时间格式化
 * 
 * @author junchao
 * @date 2019-07-16
 * @url http://momentjs.cn/
 */


/**
 * 今天，今天00:00:00到当前时刻
 */
export const returnToday = function returnToday() {
  let startDate = moment().startOf('day').format('YYYY-MM-DD');
  let startTime = moment().startOf('day').format('HH:mm:ss');
  let endDate = moment().format('YYYY-MM-DD');
  let endTime = moment().format('HH:mm:ss');
  return {
    startDate,
    startTime,
    endDate,
    endTime,
  }
};

/**
 * 昨天，昨天00:00:00到23:59:59
 */
export const returnYesterday = function returnYesterday() {
  let day = moment().get('day');
  moment().set('day', day - 1);
  let startDate = moment().startOf('day').format('YYYY-MM-DD');
  let startTime = moment().startOf('day').format('HH:mm:ss');
  let endDate = moment().endOf('day').format('YYYY-MM-DD');
  let endTime = moment().endOf('day').format('HH:mm:ss');
  return {
    startDate,
    startTime,
    endDate,
    endTime,
  }
};

/**
 * 本月，本月1日00:00:00到当前时刻
 */
export const returnThisMonth = function returnThisMonth() {
  let startDate = moment().startOf('month').format('YYYY-MM-DD');
  let startTime = moment().startOf('month').format('HH:mm:ss');
  let endDate = moment().format('YYYY-MM-DD');
  let endTime = moment().format('HH:mm:ss');
  return {
    startDate,
    startTime,
    endDate,
    endTime,
  }
};

/**
 * 上月，上月1日00:00:00到上月最后一天23:59:59
 */
export const returnLastMonth = function returnLastMonth() {
  let now = moment();
  let month = now.get('month');
  now.set('month', month - 1);
  let startDate = now.startOf('month').format('YYYY-MM-DD');
  let startTime = now.startOf('month').format('HH:mm:ss');
  let endDate = now.endOf('month').format('YYYY-MM-DD');
  let endTime = now.endOf('month').format('HH:mm:ss');
  return {
    startDate,
    startTime,
    endDate,
    endTime,
  }
};
