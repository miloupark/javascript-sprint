// Destructuring 구조 분해 문법
// - 배열이나 객체의 값을 분해해 변수에 쉽게 담을 수 있는 문법
// - ES6(ES2015)에서 추가된 문법

// 1. 배열 구조 분해
let arr = ['apple', 10];
console.log(arr); // [ 'apple', 10 ]

// 기본 방식 (인덱스로 접근)
let favFruit = arr[0];
let favNum = arr[1];
console.log(favFruit); // apple
console.log(favNum); // 10

// 구조 분해 문법 사용
let [myFruit, myNum] = arr;
console.log(myFruit); // apple
console.log(myNum); // 10

// 2. 객체 구조 분해
let user = {
  userName: 'bin',
  age: 10,
  skill: 'js',
};

// 기본 방식
let myInfo = user.userName;
console.log(myInfo); // bin

// 구조 분해 문법 사용
let { userName, age, skill } = user;
console.log(userName); // bin   (= user.userName)
console.log(age); // 10
console.log(skill); // js

// 별칭 설정 가능
// - 구조 분해 시 변수 이름을 바꿀 수 있음
let { userName: nameAlias, age: userAge, skill: userSkill } = user;
console.log(nameAlias); // bin
console.log(userAge); // 10
console.log(userSkill); // js
