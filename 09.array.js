//  Array
// - 여러 데이터를 순서대로 저장할 수 있는 자료형
// - 목록을 표현할 때 자주 사용
// - 각 데이터는 0부터 시작하는 인덱스로 접근 가능

let arr = []; // 빈 배열 선언
arr[0] = 10;
console.log(arr); // [ 10 ]

arr[1] = 20;
console.log(arr); // [ 10, 20 ]

let arr2 = ['a', 'b'];
console.log(arr2); // [ 'a', 'b' ]
console.log(arr2.length); // 2

// 배열 관련 주요 메서드 (Array API)
// - push(): 배열 끝에 데이터 추가 (배열 변경됨)
// - pop(): 배열 끝의 데이터를 제거 (배열 변경됨)
// - shift(): 배열의 첫 번째 데이터를 제거 (배열 변경됨)
// - splice(): 특정 인덱스의 데이터를 추가, 변경, 삭제 (배열 변경됨)
// - slice(): 배열의 일부를 복사해 새 배열 반환 (원본 배열 변경되지 않음)

let arr3 = [];
arr3.push(10);
console.log(arr3); // [ 10 ]

arr3.push('a');
console.log(arr3); // [ 10, 'a' ]

arr3.pop();
console.log(arr3); // [ 10 ]

arr3.splice(0, 1); // 인덱스 0에서 1개 제거
console.log(arr3); // []

// 배열 반복 (forEach)
// - 배열의 각 요소를 순회하며 콜백 함수를 실행, 결과를 반환하지 않는다. (단순 반복용)
// - 콜백 함수의 매개변수(value)로 각 요소에 접근 가능

let arr4 = ['a', 'b', 'c'];

arr4.forEach(function (value) {
  console.log(value);
});
// a
// b
// c

// 용어 정리
// - 내장 API(Built-in API): 자바스크립트에 기본 내장된 기능
// - API(Application Programming Interface): 프로그램이 미리 정의된 기능을 사용할 수 있도록 제공되는 인터페이스
// - 배열 메서드는 모두 Array의 프로토타입(Prototype)에 정의되어 있음
