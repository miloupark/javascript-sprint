// 일급 함수
// - 함수를 값처럼 다룰 수 있는 언어적 특성
// - 즉, 함수를 변수에 저장하거나, 다른 함수의 인자로 전달하거나, 함수에서 반환할 수도 있다.

function logText8(message) {
  message(); // 2. 전달받은 함수 호출
}

logText8(function () {
  // 1. 익명함수를 logText의 인자로 전달
  console.log('hi'); // hi
});

// 함수를 호출하면서 함수를 넘길 수 있는 이유는, 함수가 값으로 취급되기 때문이다.
// 이처럼 함수가 값으로 다뤄질 수 있기 때문에,
// 함수를 변수에 저장하는 '함수 표현식'도 가능하다.

const logText9 = function () {
  console.log('hi');
};

logText9(); // hi
