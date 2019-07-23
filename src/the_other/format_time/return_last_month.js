/**
 * 返回上月这一时间段，上月月1号00:00:00到上月最后一天23:59:59
 * 
 * @author junchao
 * @date 2019-07-23
 * @example {start:'2019-06-01 00:00:00',end:'2019-06-30 23:59:59'}
 */

export const returnLastMonth = function returnLastMonth() {
  let now = new Date();
  let startDate = transLastMonthStartDate(now);
  let startTime = "00:00:00";
  let endDate = transLastMonthEndDate(now);
  let endTime = "23:59:59";
  return {
    start: `${startDate} ${startTime}`,
    end: `${endDate} ${endTime}`,
  }
};

/**
 * 获取上月开始日期
 */
function transLastMonthStartDate(mescStr) {
  let date = new Date(mescStr);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = '01';
  if (month === 0) {
    year = year - 1;
    month = 12;
    return (`${year}-${month}-${day}`)
  }
  month = month < 10 ? '0' + month : month;
  return (`${year}-${month}-${day}`)
}

/**
 * 获取上月结束日期
 */
function transLastMonthEndDate(mescStr) {
  let date = new Date(mescStr);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = '';
  if (month === 0) {
    year = year - 1;
    month = 12;
  }
  // 获取上个月的日期 
  let lastMonthDate = new Date(year, month, 0);
  // 获取上个月的天数
  let lastMonthLen = lastMonthDate.getDate();
  day = lastMonthLen;
  return (`${year}-${month}-${day}`)
}