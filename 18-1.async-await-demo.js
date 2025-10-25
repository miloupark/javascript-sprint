// async & await
// - Promise 기반 코드를 더 간결하게 작성할 수 있게 해주는 문법
// - then() 체인 없이 순차적으로 비동기 처리 가능
// - try / catch로 에러 처리

function fetchMenu() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { firstMenu: '구독' };
      const error = null;
      if (error) reject(error);
      else resolve(data);
    }, 5000);
  });
}

function renderPageUI(menu) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = null;
      if (error) reject(error);
      else resolve('UI 렌더링 완료');
    }, 2000);
  });
}

async function init() {
  try {
    // 1. 메뉴 데이터 요청
    const menu = await fetchMenu();
    console.log('5초 뒤 실행:', menu);
    console.log('출력 결과:', menu);

    // 2. UI 렌더링 요청
    const result = await renderPageUI(menu);
    console.log(result);
  } catch (error) {
    console.log('에러 처리:', error);
  }
}

// 실행
init();

// 5초 뒤 실행: { firstMenu: '구독' }
// 출력 결과: { firstMenu: '구독' }
// UI 렌더링 완료
