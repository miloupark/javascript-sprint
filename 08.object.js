// @ts-nocheck

// object
// - 자바스크립트는 객체 기반 언어
// - 객체는 key(속성이름): value(속성 값) 형태로 데이터를 저장한다.
// - 이미 생성된 객체에도 언제든지 속성을 추가하거나 수정할 수 있다.

let obj = {
  a: 10,
};
console.log(obj); // { a: 10 }
console.log(obj.a); // 10
// 새로운 속성 추가
obj.b = 20;
console.log(obj); // { a: 10, b: 20 }

// 변수 vs 객체 속성
let a = 10;
console.log(obj.a); // 10 → obj 객체 안의 a 속성 값
console.log(a); // 10 → 독립적인 변수
console.log(a === obj); // false → 값은 같아 보여도 완전히 다른 저장 공간

// 객체 리터럴 축약 문법
// - key와 value의 이름이 같으면 { key: key }를 { key }로 축약할 수 있다.
let a2 = 10;

// 원래 문법
// let obj2 = { a2: a2 };

// 축약 문법
let obj2 = {
  a2, // ← 이게 a2: a2의 축약형!
};

console.log(obj2); // { a2: 10 }
console.log(obj2.a2); // 10

// 응용 예시: 여러 변수를 한 번에 객체로 묶기
let name = 'Binny';
let age = 30;

// { name, age }는 { name: name, age: age }의 축약형
let user = { name, age };
console.log(user); // { name: "Binny", age: 27 }

// 객체 메서드
// - 객체의 속성값으로 함수를 정의할 수 있다.
// - 속성에 함수를 정의할때 function 예약어 생략 가능

// 기존 방식
let josh = {
  coding: function () {
    console.log('코딩');
  },
};

josh.coding(); // 코딩

// ES6 축약 문법
let capt = {
  coding() {
    console.log('코딩');
  },
};
capt.coding(); // 코딩
