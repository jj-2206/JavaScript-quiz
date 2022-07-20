// 2-1
// 실행된다.
if ('0') {
  console.log('Hello');
}
/* 거짓 같은 값들
false, 
0, 
-0, 
0n(BigInt),
" "(빈 string),
null,
undefined,
NaN 
*/

// 2-2
(a = 4), (b = 8);
// let result;
// if (a + b < 4) {
//   result = '미만';
// } else {
//   result = '이상';
// }
let result = a + b < 4 ? '미만' : '이상';
console.log(result);

// 2-3
let login = '';
let message =
  login === '직원'
    ? '안녕하세요.'
    : login === '임원'
    ? '환영합니다.'
    : login === ''
    ? '로그인이 필요합니다.'
    : '';
console.log(message);

// 2-4
let browser = 'Chrome';
if (browser === 'Edge') {
  console.log('Edge를 사용하고 계시네요!');
} else if (
  browser === 'Chrome' ||
  browser === 'Firefox' ||
  browser === 'Safari' ||
  browser === 'Opera'
) {
  console.log('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
} else {
  console.log('현재 페이지가 괜찮아 보이길 바랍니다!');
}

// 2-5
a = 2;
switch (a) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log('2,3');
    break;
}
