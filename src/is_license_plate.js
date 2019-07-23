/**
 * 判断一个字符串是否是车牌
 * 
 * @author junchao
 * @date 2019-07-16
 */

// 判断车牌号的正则表达式
const regexLicensePlate = /^[\u4e00-\u9fa5_a-zA-Z0-9]{7,8}$/;

/**
 * 判断一个字符串是否是车牌
 * 
 * @param {string} str 要判断的字符串
 * 1、传统车牌
 *   第1位为省份简称（汉字），第二位为发牌机关代号（A - Z的字母）第3到第7位为序号（由字母或数字组成，但不存在字母I和O，防止和数字1、0混淆，另外最后一位可能是“挂学警港澳使领”中的一个汉字）。
 * 2、新能源车牌
 *   第1位和第2位与传统车牌一致，第3到第8位为序号（比传统车牌多一位）。新能源车牌的序号规则如下：
 *   小型车：第1位只能是字母D或F，第2为可以是数字或字母，第3到6位必须是数字。
 *   大型车：第1位到第5位必须是数字，第6位只能是字母D或F。
 * @example 正确的车牌：川A123AB、川A2222学、川AF12345、川A12345D。
 * @example 错误的车牌：川A123456、川A2222i、川AA12345、川AD123456
 * 
 */
export const isLicensePlate = function isLicensePlate(str) {
  return regexLicensePlate.test(str);
};
