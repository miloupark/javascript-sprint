// Spread Operator (스프레드 연산자)
// - 배열이나 객체의 내용을 펼쳐(copy) 새로운 배열/객체를 만드는 문법
// - ES6(ES2015)에서 추가된 문법
// - 불변성을 유지하면서 복사하거나 합칠 때 자주 사용됨

// 1. 객체 복사
let user = {
  a: 10,
  b: 20,
};

// 기존 방식(하나씩 직접 복사)
let oldUser = {
  a: user.a,
  b: user.b,
  c: 30,
};
console.log(oldUser); // { a: 10, b: 20, c: 30 }

// 스프레드 연산자 사용
let newUser1 = { ...user }; // 복사
let newUser2 = { ...user, c: 30 }; // 복사 + 새로운 속성 추가
console.log(newUser1); // { a: 10, b: 20 }
console.log(newUser2); // { a: 10, b: 20, c: 30 }

// 2. 배열 복사
let arr = ['a', 'b'];

// 기존 방식 (하나씩 직접 복사)
let oldArr = [arr[0], arr[1]];
console.log(oldArr); // [ 'a', 'b' ]

// 스프레드 연산자 사용
let newArr1 = [...arr]; // 복사
let newArr2 = [...arr, 'c']; // 복사 + 새로운 요소 추가
console.log(newArr1); // [ 'a', 'b' ]
console.log(newArr2); // [ 'a', 'b', 'c' ]

// 두 배열 합치기
let arr2 = ['x', 'y'];
let mergedArr = [...arr, ...arr2];
console.log(mergedArr); // ['a', 'b', 'x', 'y']
