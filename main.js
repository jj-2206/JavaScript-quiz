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

// 3
