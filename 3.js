// 3-1
for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
}

let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

// 3-2
lineCount = 5;
for (let i = 0; i < lineCount; ++i) {
  let a = '';
  for (let j = i; j < lineCount - 1; ++j) {
    a += '@';
  }
  for (let j = 0; j < 2 * i + 1; ++j) {
    a += '*';
  }
  console.log(a);
}

// 3-3
for (let i = 1; i < 101; i++) {
  if (i % 7 === 2 || i % 7 === 5) console.log(i);
}
// 3-3 강사님의 코드
// 하나씩 검사하지 않고 쓸 수 있는 코드!
for (let i = 2; i <= 100; i += 4) {
  console.log(i);
  i += 3;
  if (i <= 100) {
    console.log(i);
  }
}
