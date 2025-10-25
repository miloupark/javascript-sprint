// Asynchronous 비동기
// - 자바스크립트는 한 번에 한 작업만 처리할 수 있는 단일 스레드 언어이지만,
//   비동기 방식을 통해 오래 걸리는 작업(서버 통신, 파일 읽기 등)을 기다리지 않고 처리할 수 있다.
// - 즉, 동시에 여러 작업이 “진행되는 것처럼” 보이게 만들어준다.

// 🧩 유튜브 페이지 로드 과정으로 비동기 이해하기

// 좌측 메뉴 데이터를 서버에서 가져오는 함수 (가정)
function fetchMenuInfo(callback) {
  // 실제 요청이라면 axios.get 같은 비동기 작업이 이뤄짐
  axios.get('http://domain.com/api/menu', function (response) {
    // 요청이 완료되면 전달받은 콜백(callback)을 실행
    callback(response);
  });
}

// 1. 사용자 정보 요청
fetchUser();

// 2. 좌측 메뉴 정보 요청
// - 비동기 요청이므로, 응답을 기다리지 않고 다음 코드로 넘어감
// - 요청이 완료된 후 실행할 로직을 콜백 함수로 전달해야 함
let menu;

fetchMenuInfo(function (response) {
  menu = response;

  // 4. 페이지 UI 표시
  renderPageUI(menu);
});

// 3. 영상 본문 요청
fetchContents();

// 실행 순서 (예상)
// 1. fetchUser() 실행 → 완료
// 2. fetchMenuInfo() 요청 전송 → 대기
// 3. fetchContents() 실행 → 완료
// 4. fetchMenuInfo() 응답 도착 → 콜백 실행 → renderPageUI() 실행
