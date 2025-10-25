// promise
function fetchMenuPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { firstMenu: '구독' };
      const error = null;
      if (error) reject(error);
      else resolve(data);
    }, 5000);
  });
}

function renderPageUIPromise(menu) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = null;
      if (error) reject(error);
      else resolve('UI 렌더링 완료');
    }, 2000);
  });
}

// 프로미스 문법으로 작성된 코드
fetchMenuPromise()
  .then((menu) => {
    console.log('5초 뒤 실행:', menu);
    console.log('출력 결과:', menu);
    return renderPageUIPromise(menu);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log('에러 처리: ', error);
  });

// 5초 뒤 실행: { firstMenu: '구독' }
// 출력 결과: { firstMenu: '구독' }
// UI 렌더링 완료
