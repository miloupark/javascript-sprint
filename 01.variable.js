// Variable 변수
// let (mutable) / const (immutable)
// - 예약어는 변수명으로 사용 불가
// - 변수명은 카멜 케이스로 작성
// - 의미를 담은 이름으로 선언하는 것이 좋음
const a = 10;
let b = 20;

// let
console.log(b); // 20
b = 30; // 재할당 O
console.log(b); // 30

// const
console.log(a); // 10
a = 50; // TypeError (재할당 X)
