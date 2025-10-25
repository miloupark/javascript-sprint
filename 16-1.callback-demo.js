// 예시
function requestUserData(onSuccess) {
  console.log('[서버] 유저 데이터 요청 중... (3초 소요 예상)');

  // 비동기 요청 시뮬레이션
  setTimeout(() => {
    const fakeResponse = { userName: 'Binny', age: 25 };
    console.log('[서버] 데이터 준비 완료! 응답 보냄');
    onSuccess(fakeResponse); // 요청이 끝난 뒤 콜백 함수 실행
  }, 3000);
}

console.log('앱 실행 시작');

// #1. 서버에 요청 보내기
requestUserData(function (user) {
  // 요청이 완료된 후 실행될 코드
  console.log('클라이언트] 서버 응답 받음 →', user);
  console.log(`[클라이언트] ${user.userName}님의 정보를 화면에 표시합니다.`);
});

console.log('서버 응답 기다리는 동안 다른 작업 수행 중...');

// 앱 실행 시작
// [서버] 유저 데이터 요청 중... (3초 소요 예상)
// 서버 응답 기다리는 동안 다른 작업 수행 중...
// [서버] 데이터 준비 완료! 응답 보냄
// 클라이언트] 서버 응답 받음 → { userName: 'Binny', age: 25 }
// [클라이언트] Binny님의 정보를 화면에 표시합니다.
