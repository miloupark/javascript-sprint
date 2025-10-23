// Function
// 함수란 특정 기능을 수행하는 코드의 단위
// - 함수 선언문을 지향하고, 필요 시 표현식을 쓰는 것이 좋다.

// 함수 선언문
function logText() {
  console.log('hi');
}
logText(); // hi

// 함수 파라미터와 인자
// - 함수를 선언할 때 쓰는 값: 파라미터(매개변수)
// - 함수를 호출할 때 쓰는 값: 아규먼트(인자)
function logText2(message) {
  console.log(message);
}

logText2('hi'); // hi

// 함수의 반환값
// 함수가 hi를 반환하는데, a 변수에 그 반환값이 저장됨
// 즉, 함수의 호출 결과 = 반환값
function logText3(message) {
  return message;
}

let a = logText3('hi');
console.log(a); // hi

// return의 역할
// - return은 값을 돌려줄 뿐만 아니라, 그 아래 코드를 실행하지 않고 함수 실행을 종료
function logText4() {
  return a;
}

logText4();
console.log(a); // hi

// 함수 표현식
let logText5 = function () {
  console.log('hi');
};

logText5(); // hi

// 파라미터 받는 함수 표현식
let logText6 = function (message) {
  return message;
};

console.log(logText6('hi')); // hi
