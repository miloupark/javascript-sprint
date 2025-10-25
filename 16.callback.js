// callback
// - 비동기 작업이 완료된 뒤 실행할 코드를 콜백 함수로 전달하는 패턴
// - 서버 역할: 서버에서 요청을 받아 데이터를 일정 시간 후에 반환하는 상황을 가정
// - Node.js에서는 일반적으로 error-first callback 패턴을 사용함

function fetchMenu(callbackFunc) {
  setTimeout(() => {
    // #2 (5초 후 실행)
    const data = { firstMenu: '구독' };
    const error = null; // 에러가 없을 때는 null
    callbackFunc(error, data); // 요청이 끝나면 콜백 호출
  }, 5000);
}

function renderPageUI(callbackFunc) {
  setTimeout(() => {
    const data = 'UI 렌더링 완료';
    const error = null;
    callbackFunc(error, data);
  }, 2000);
}

// #1 (즉시 실행)
fetchMenu(function (error, result) {
  if (error) {
    console.log('에러 발생:', error);
    return;
  }

  // 호출되면 실행될 코드를 넣으셈
  console.log('5초 뒤 실행: ', result);
  const menu = result;
  console.log('출력 결과: ', menu);

  renderPageUI(function (error, response) {
    if (error) {
      console.log('UI 렌더링 중 에러 발생:', error);
      return;
    }

    console.log(response);
  });
});

// 5초 뒤 실행:  { firstMenu: '구독' }
// 출력 결과:  { firstMenu: '구독' }
// UI 렌더링 완료
