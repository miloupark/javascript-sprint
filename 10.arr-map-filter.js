// map, filter
// - 배열의 데이터를 변형하거나 선별할 때 사용하는 메서드
// - 둘 다 원본 배열을 변경하지 않고, 새로운 배열을 반환함
// - 내부적으로는 forEach() 하나로 map, filter 구현 가능 (고차 함수)

// map, filter
// [10, 20, 30];
// map → [100, 200, 300]
// filter → [10]

// map()
// - 배열의 각 요소를 순회하면서, 콜백 함수의 반환값으로 새 배열을 생성함
// - 원본 배열을 변경하지 않음
let arr5 = [10, 20, 30];

let result = arr5.map(function (item) {
  return item * 10;
});

console.log(arr5); // [ 10, 20, 30 ] (원본 유지)
console.log(result); // [ 100, 200, 300 ]

// filter()
// - 배열의 각 요소를 순회하며, 콜백 함수에서 true를 반환한 요소만 새 배열에 담음
// - 원본 배열을 변경하지 않음
let result2 = arr5.filter(function (item) {
  if (item == 10) {
    return true;
  }
});

console.log(arr5); // [ 10, 20, 30 ]
console.log(result2); // [ 10 ] (조건을 만족한 값만 포함)

// forEach() 반복문으로 map(), filter() 직접 구현하기
// 새 배열 반환하지 않으므로, 직접 push()해야 함

let arr6 = [10, 20, 30];

// map()처럼 동작시키기
let newArr6 = [];

arr6.forEach(function (item) {
  newArr6.push(item * 10);
});

console.log(arr6); // [ 10, 20, 30 ]
console.log(newArr6); // [ 100, 200, 300 ]

// filter()처럼 동작시키기
let newArr7 = [];

arr6.forEach(function (item) {
  if (item == 10) {
    newArr7.push(item);
  }
});

console.log(newArr7); // [ 10 ]
