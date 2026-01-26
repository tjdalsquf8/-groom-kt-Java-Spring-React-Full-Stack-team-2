/**
 * 페이지 이동 기능을 관리하는 로직
 */

// 요소 탐색
const myPageBtn = document.getElementById('myPageBtn');
const mainPageBtn = document.getElementById('mainpagebtn');

// 마이페이지 이동
if (myPageBtn) {
    myPageBtn.addEventListener('click', () => {
        window.location.href = '../MyPage/mypage.html';
    });
}

// 홈(메인페이지) 이동
if (mainPageBtn) {
    mainPageBtn.addEventListener('click', () => {
        window.location.href = '../MainPage/mainpage.html';
    });
}
