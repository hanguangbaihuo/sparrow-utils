import WxQrcode from 'wx-base64-qrcode';
// import WxQrcode from './wxqrcode';
/**
 * 生成base64二维码
 * 
 * @author junchao
 * @date 2019-07-16
 * @url https://github.com/PsChina/wx-base64-qrcode
 */

/**
 * 生成base64二维码
 * 
 * @param {string} code 要生成的字符串
 * @param {string} size 二维码的大小
 */
export const createQrcodeImg = function createQrcodeImg(code, size) {
  return WxQrcode.createQrCodeImg(code, size)
}
