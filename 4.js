// 4-1
function min(a, b) {
  if (a > b) {
    return b;
  } else if (a < b) {
    return a;
  } else return a;
}
// 크거나 작거나 같거나지만, else로 끝내도 무방하다. (둘 중 하나의 값이 되기 때문에)
function min(a, b) {
  if (a > b) {
    return b;
  } else return a;
}

// 4-2
const min = (a, b) => {
  if (a > b) {
    return b;
  } else return a;
};

/*
함수 선언식
function 함수명() {
  구현 로직
}
함수 표현식
const 함수명 = function () {
  구현 로직
};
*/

// 4-3
function makeStar(lineCount) {
  for (let i = 0; i < lineCount; ++i) {
    let a = '';
    for (let j = i; j < lineCount - 1; ++j) {
      a += ' ';
    }
    for (let j = 0; j < 2 * i + 1; ++j) {
      a += '*';
    }
    console.log(a);
  }
}
console.log(makeStar(5));

// 4-4 ***
function add(a) {
  return function (b) {
    return a + b;
  };
}
console.log(add(1)(2)); // 3
// 함수명()() -> 함수명 함수가 실행되면 익명함수가 실행되는 모양

// 4-5
function checkBoolean(bool, func1, func2) {
  if (bool) {
    func1();
  } else {
    func2();
  }
}
function trueFunc() {
  console.log('true!');
}
function falseFunc() {
  console.log('false!');
}

// 4-6
// 더 간단하게 작성할 수 있는 방법이 있으려나..!
const checkBoolean = (bool, func1, func2) => {
  if (bool) {
    func1();
  } else {
    func2();
  }
};
const trueFunc = () => console.log('true!');
const falseFunc = () => console.log('false!');
