// 변수명 겹치지 않게 임의로 작성

// 1-1
let admin;
let hisname;
hisname = 'John';
admin = hisname;
console.log(admin);

// 1-2
let hername = 'Ilya';
console.log(`hello ${1}`);
console.log(`hello ${'hername'}`);
console.log(`hello ${hername}`);

// 1-3
console.log('1', typeof ('' + 1 + 0), '' + 1 + 0);
console.log('2', typeof ('' - 1 + 0), '' - 1 + 0);
console.log('3', typeof (true + false), true + false);
console.log('4', typeof (6 / '3'), 6 / '3');
console.log('5', typeof ('2' * '3'), '2' * '3');
console.log('6', typeof (4 + 5 + 'px'), 4 + 5 + 'px');
console.log('7', typeof ('$' + 4 + 5), '$' + 4 + 5);
console.log('8', typeof ('4' - 2), '4' - 2);
console.log('9', typeof ('4px' - 2), '4px' - 2);
console.log('10', typeof (7 / 0), 7 / 0);
console.log('11', typeof ('-9' + 5), '-9' + 5);
console.log('12', typeof ('-9' - 5), '-9' - 5);
console.log('13', typeof (null + 1), null + 1);
console.log('14', typeof (undefined + 1), undefined + 1);
console.log('15', typeof ('\t \n' - 2), '\t \n' - 2);

// 1-4
//a = 4, x = 5
let a = 2;
let x = 1 + (a *= 2);
console.log(a, x);

// 1-5
// 2 2 2 1
let b = 1,
  c = 1;
let d = ++b;
let e = c++;
console.log(b, c, d, e);

// 1-6
console.log(5 > 4);
console.log('apple' > 'pineapple');
console.log('2' > '12');
console.log(undefined == null);
console.log(undefined === null);
console.log(null == '\n0\n');
console.log(null === +'\n0\n');
