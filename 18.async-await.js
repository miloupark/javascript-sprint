// async & await
// - 비동기 코드를 동기 코드처럼 작성할 수 있게 해주는 문법
// - async 함수는 항상 Promise를 반환한다.
// - await은 Promise가 처리(resolve)될 때까지 기다린 뒤 결과값을 반환한다.
// - 코드의 가독성이 좋아지고, then() 체인 없이도 비동기 흐름을 제어할 수 있다.

// 메뉴 데이터를 서버에서 불러온다고 가정
// fetchMenu()는 Promise를 반환하는 비동기 함수라고 가정한다.
function fetchMenu() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ firstMenu: '구독' }), 3000);
  });
}

async function init() {
  // 1. 메뉴 선언
  let menu;

  // 2. 메뉴 데이터 호출 후 결과를 menu에 할당
  // - fetchMenu()의 Promise가 완료될 때까지 대기
  // - await이 resolve될 때까지 다음 줄은 실행되지 않음
  // - fetchMenu()가 반환한 결과값이 menu에 저장됨
  menu = await fetchMenu();

  // 3. 메뉴 데이터 콘솔에 출력
  // - Promise가 완료된 뒤 결과값 출력
  console.log(menu); // { firstMenu: '구독' }
}

// 4. 함수 실행
init();

// 실행 순서
// 1. init() 함수가 호출됨
// 2. fetchMenu() 호출 → Promise 반환
// 3. await이 Promise의 완료(resolve)를 기다리는 동안
//    JS 엔진은 다른 동기 코드들을 먼저 실행할 수 있음 (비동기 처리)
// 4. Promise가 완료되면(await 해제)
//    → menu 변수에 결과값 할당
// 5. console.log(menu) 실행
