// 5-1
user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
console.log(user);

user2 = {};
user2.key = 'surname';
user2.value = 'Smith';
console.log(user2); // {key: 'surname', value: 'Smith'}

// 5-2
const original = [1, 5, 2, 3];
const mapFunction = (item) => item;
const a = original.map(mapFunction);
console.log(a); // (4) [1, 5, 2, 3]

// 5-3
const original = [1, 5, 2, 3];
const mapFunction = (item) => item * 2;
const a = original.map(mapFunction);
console.log(a); // (4) [2, 10, 4, 6]

// 5-4
const original = [{ a: 1 }, { a: 5 }, { a: 2 }, { a: 3 }];
const mapFunction = (item) => item.a;
const a = original.map(mapFunction);
console.log(a); // (4) [1, 5, 2, 3]

// 5-5
const original = [{ a: 1 }, { a: 5 }, { a: 2 }, { a: 3 }];
const mapFunction = (item) => item.a * 2;
const a = original.map(mapFunction);
console.log(a); // (4) [2, 10, 4, 6]

// 5-6
const original = [{ a: 1 }, { a: 5 }, { a: 2 }, { a: 3 }];
const mapFunction = (item, index) => {
  return { a: item.a * 2 };
};
const a = original.map(mapFunction);
console.log(a);
// (4) [{…}, {…}, {…}, {…}]
// 0: {a: 2}
// 1: {a: 10}
// 2: {a: 4}
// 3: {a: 6}
// length: 4
// [[Prototype]]: Array(0)
console.log(original);
// (4) [{…}, {…}, {…}, {…}]
// 0: {a: 1}
// 1: {a: 5}
// 2: {a: 2}
// 3: {a: 3}
// length: 4
// [[Prototype]]: Array(0)

// 5-7
const original = [{ a: 1 }, { a: 5 }, { a: 2 }, { a: 3 }];
const findFunction = (item) => item.a === 5;
const a = original.find(findFunction);
console.log(a); // {a: 5}

// 5-8
const arr = [
  {
    name: 'kim',
    age: 10,
  },
  {
    name: 'park',
    age: 15,
  },
  {
    name: 'lee',
    age: 12,
  },
  {
    name: 'choi',
    age: 13,
  },
  {
    name: 'jin',
    age: 20,
  },
  {
    name: 'woo',
    age: 30,
  },
];
const findAge = (targetName) => {
  const findItem = (item) => {
    return item.name === targetName.toLowerCase().trim();
  };
  const result = arr.find(findItem);
  return result.age;
};
console.log(findAge(' jIN')); // 20
console.log(findAge('woO ')); // 30

// 5-9
const arr = [
  {
    name: 'kim',
    age: 10,
  },
  {
    name: 'choi',
    age: 13,
  },
  {
    name: 'jin',
    age: 20,
  },
  {
    name: 'woo',
    age: 50,
  },
  {
    name: 'woo',
    age: 20,
  },
  {
    name: 'woo',
    age: 30,
  },
];

const findAge = (name) => {
  const trimmedName = name.trim().toLowerCase();
  const foundAge = arr
    .filter((item) => trimmedName === item.name)
    /*
    (3) [{…}, {…}, {…}]
      0: {name: 'woo', age: 50}
      1: {name: 'woo', age: 20}
      2: {name: 'woo', age: 30}
      length: 3
      [[Prototype]]: Array(0)
    */
    .map(({ age }) => age)
    /*
    (3) [50, 20, 30]
      0: 50
      1: 20
      2: 30
      length: 3
      [[Prototype]]: Array(0)
    */
    .sort((a, b) => b - a);

  return foundAge;
};
console.log(findAge(' WoO '));

// 5-10
const arr = [
  {
    name: 'kim',
    age: 10,
  },
  {
    name: 'park',
    age: 15,
  },
  {
    name: 'lee',
    age: 12,
  },
  {
    name: 'choi',
    age: 13,
  },
  {
    name: 'jin',
    age: 20,
  },
  {
    name: 'woo',
    age: 30,
  },
];

function findAge(surName) {
  return function (item) {
    if (item.name === surName) return true;
  };
}
console.log(arr.find(findAge('woo'))); // {name: 'woo', age: 30}
console.log(arr.find(findAge('woo')).name); // woo
console.log(arr.find(findAge('woo')).age); // 30

// 5-11
const arr = [
  {
    name: 'kim',
    age: 10,
  },
  {
    name: 'park',
    age: 15,
  },
  {
    name: 'lee',
    age: 12,
  },
  {
    name: 'choi',
    age: 13,
  },
  {
    name: 'jin',
    age: 20,
  },
  {
    name: 'woo',
    age: 30,
  },
];

const toObject = arr.reduce((newObj, obj) => {
  newObj[obj.name] = obj.age;
  return newObj;
}, {});
console.log(toObject);
console.log(toObject(arr));

// -> toObject가 함수가 아님... 모르겠음...
