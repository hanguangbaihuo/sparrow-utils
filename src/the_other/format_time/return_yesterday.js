/**
 * 返回今天这一时间段，昨天00:00:00到昨天23:59:59
 * 
 * @author junchao
 * @date 2019-07-16
 * @example {start:'2019-07-15 00:00:00',end:'2019-07-15 23:59:59'}
 */

export const returnYesterday = function returnYesterday() {
  let now = new Date();
  let startDate = transYesterday(now);
  let startTime = "00:00";
  let endDate = transYesterday(now);
  let endTime = "23:59";
  return {
    start: `${startDate} ${startTime}`,
    end: `${endDate} ${endTime}`,
  }
};

/**
 * 获取昨天的时间
 */
function transYesterday(mescStr) {
  let date = new Date(mescStr);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  // 如果今天是1号，则取上个月的最后一天
  if (day === 1) {
    // 如果今天1月份，则取上一年12月31日
    if (month === 0) {
      year -= 1;
      month = '12';
      day = '31';
      return (`${year}-${month}-${day}`)
    }
    // 获取上个月的日期 
    let lastMonthDate = new Date(year, month, 0);
    // 获取上个月的天数
    day = lastMonthDate.getDate();
    if (month < 10) {
      month = `0${month}`;
      return (`${year}-${month}-${day}`)
    }
    return (`${year}-${month}-${day}`)
  }
  if (month < 10) {
    month = `0${month + 1}`;
    return (`${year}-${month}-${day - 1}`)
  }
  if (day < 10) {
    day = `0${day - 1}`;
    return (`${year}-${month + 1}-${day}`)
  }
  return (`${year}-${month + 1}-${day - 1}`)
}