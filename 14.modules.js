// 모듈화의 필요성
// - import와 export는 자바스크립트 코드를 모듈화 할 수 있는 기능이다.
// - 모듈화란, 하나의 파일에서 정의한 변수나 함수를 다른 파일에서도 재사용할 수 있게 하는 개념이다.
// - 즉, 코드를 역할별로 나누어 관리하고 유지보수를 쉽게 만드는 방법.

// 1. export 문법
// - 변수나 함수, 클래스 등을 외부에서 사용할 수 있도록 내보낸다.
// export 변수명;
// export function 함수명() { ... }
// export default 기본값;

// 2. import 문법
// - 다른 파일에서 export된 변수나 함수를 불러와 사용한다.
// import { 불러올_이름 } from '파일경로';
// import 기본값 from '파일경로';

// 일반 import & export 문법
import { pi, sum } from './14-1.math.js';

console.log(pi); // 3.14
console.log(sum); // [Function: sum]
console.log(sum(10, 20)); // 30

// default export 문법
import message from './14-2.app.js';
console.log(message);

// 3. 외부 라이브러리
// - 개발자가 편하게 구현할 수 있도록 미리 만들어 놓은 기능들
// import 라이브러리이름 from "라이브러리이름"

// $ npm i --save lodash 설치 후 import 가능
import lodashLibrary from 'lodash';
console.log(lodashLibrary);
console.log(lodashLibrary.VERSION); // 4.17.21
