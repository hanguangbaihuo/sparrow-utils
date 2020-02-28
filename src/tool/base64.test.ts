import base64 from './base64';

const {
  encode,
  decode,
} = base64;

test("btoa('sparrow-utils') equals 'c3BhcnJvdy11dGlscw=='", () => {
  expect(encode('sparrow-utils')).toEqual('c3BhcnJvdy11dGlscw==');
});

test("atob('c3BhcnJvdy11dGlscw==') equals 'sparrow-utils'", () => {
  expect(decode('c3BhcnJvdy11dGlscw==')).toEqual('sparrow-utils');
});
