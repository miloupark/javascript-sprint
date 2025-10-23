// 화살표 함수
// - ES6의 새로운 함수 정의 방식

// 1, 기존 함수 정의 방식
var a = function () {
  // ...
};

// 2. 화살표 함수를 이용한 함수 정의
var a = () => {
  // ...
};

// 3. 화살표 함수로 작성된 함수 표현식
var logText10 = () => {
  console.log('hi');
};

logText10(); // hi

// 4. 화살표 함수 축약 문법
let logMessage = () => {
  return 'a';
};

logMessage();
console.log(logMessage()); // a

let logMessage2 = () => 'a';
logMessage2();
console.log(logMessage2()); // a

// 5. 전달 인자가 하나인 경우
// - 인자가 하나일 때는 소괄호를 생략할 수 있다.
let logNumber = (num) => {
  return num;
};
console.log(logNumber(1)); // 1

let logNumber2 = (num) => num; // Prettier 때문에 자동추가...
console.log(logNumber2(1)); // 1
