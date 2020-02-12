/* eslint-disable no-multi-assign */
/* eslint-disable one-var-declaration-per-line */
/* eslint-disable one-var */
/* eslint-disable no-bitwise */

// 该文件改写自nimiapp_shop项目下common/js/base64.js
// 改写内容：
// 1. js转ts
// 2. 原来使用class承载，没看出使用原型写的好处(如果出于私有方法的问题，模块没有导出外面便引用不到)，改为普通函数

const KEYSTR: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

// 将一个普通字符串按utf-8编码
function utf8Encode(str: string): string {
  const handledStr: string = str.replace(/\r\n/g, '\n');
  const strLen: number = handledStr.length;
  let utfText = '';
  for (let n = 0; n < strLen; n++) {
    const currentChar: number = handledStr.charCodeAt(n);
    if (currentChar < 128) {
      utfText += String.fromCharCode(currentChar);
    } else if ((currentChar > 127) && (currentChar < 2048)) {
      utfText += String.fromCharCode((currentChar >> 6) | 192);
      utfText += String.fromCharCode((currentChar & 63) | 128);
    } else {
      utfText += String.fromCharCode((currentChar >> 12) | 224);
      utfText += String.fromCharCode(((currentChar >> 6) & 63) | 128);
      utfText += String.fromCharCode((currentChar & 63) | 128);
    }
  }
  return utfText;
}

// 解码一个utf-8
function utf8Decode(utf8Text: string): string {
  let result: string = '';
  let i: number = 0;
  const len: number = utf8Text.length;
  while (i < len) {
    const currentChar: number = utf8Text.charCodeAt(i);
    if (currentChar < 128) {
      result += String.fromCharCode(currentChar);
      i++;
    } else if ((currentChar > 191) && (currentChar < 224)) {
      const secondChar: number = utf8Text.charCodeAt(i + 1);
      result += String.fromCharCode(((currentChar & 31) << 6) | (secondChar & 63));
      i += 2;
    } else {
      const secondChar: number = utf8Text.charCodeAt(i + 1);
      const thirdChar: number = utf8Text.charCodeAt(i + 2);
      result += String.fromCharCode(
        ((currentChar & 15) << 12) | ((secondChar & 63) << 6) | (thirdChar & 63),
      );
      i += 3;
    }
  }
  return result;
}

const base64: {
  encode: (str: string) => string;
  decode: (str: string) => string;
} = {
  encode: (input: string): string => {
    let output: string = '';
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    let i = 0;
    const len: number = input.length;
    const handledInput: string = utf8Encode(input);
    while (i < len) {
      chr1 = handledInput.charCodeAt(i++);
      chr2 = handledInput.charCodeAt(i++);
      chr3 = handledInput.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (Number.isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (Number.isNaN(chr3)) {
        enc4 = 64;
      }
      output += KEYSTR.charAt(enc1) + KEYSTR.charAt(enc2) +
        KEYSTR.charAt(enc3) + KEYSTR.charAt(enc4);
    }
    return output;
  },
  decode: (input: string): string => {
    let output: string = '';
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    let i = 0;
    const handledInput = input.replace(/[^A-Za-z0-9+/=]/g, '');
    while (i < input.length) {
      enc1 = KEYSTR.indexOf(handledInput.charAt(i++));
      enc2 = KEYSTR.indexOf(handledInput.charAt(i++));
      enc3 = KEYSTR.indexOf(handledInput.charAt(i++));
      enc4 = KEYSTR.indexOf(handledInput.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output += String.fromCharCode(chr1);
      if (enc3 !== 64) {
        output += String.fromCharCode(chr2);
      }
      if (enc4 !== 64) {
        output += String.fromCharCode(chr3);
      }
    }
    output = utf8Decode(output);
    return output;
  },
};

export default base64;
