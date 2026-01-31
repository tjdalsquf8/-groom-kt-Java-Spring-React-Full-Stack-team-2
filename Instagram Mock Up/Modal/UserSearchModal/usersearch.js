const UserSearchModal = document.getElementById('user-search-modal');
const UserSearchCloseBtn = document.getElementById('user-search-close-btn');
const UserSearchInput = document.getElementById('user-search-input');
const UserSearchClearBtn = document.getElementById('user-search-clear-btn');
const UserSearchP = document.getElementById('user-search-p');
const UserSearchSeparator = document.getElementById('user-search-separator');
const UserSearchLs = document.getElementsByClassName('user-search-ls');
const UserSearchLsBtn = document.getElementsByClassName('user-search-ls-btn');
const UserSearchRecent = document.getElementById('user-search-recent');
const UserSearchNoResult = document.getElementById('user-search-noresult');
const UserSearchBox = document.getElementById('search-box');
// 검색 모달 닫기
UserSearchCloseBtn.onclick = function() {
    UserSearchModal.style.display = 'none';
    UserSearchInput.value = '';
    UserSearchNoResult.style.display = 'none';
    UserSearchNoResult.innerHTML = '';
    UserSearchClearBtn.style.display = 'none';
    UserSearchBox.style.marginBottom = '0px';

}

// 검색 입력 초기화
UserSearchClearBtn.addEventListener('mousedown', function(event) {
    event.preventDefault();
});

UserSearchClearBtn.onclick = function() {
    UserSearchInput.value = '';
    UserSearchNoResult.style.display = 'none';
    UserSearchNoResult.innerHTML = '';
    UserSearchRecent.style.display = 'block';
    UserSearchClearBtn.style.display = 'none';
    UserSearchBox.style.marginBottom = '0px';
}


//사용자 더미 데이터 생성
const CreateUser = (id, stat, img) => ({
    id,
    stat,
    img

});
const userData = [
    CreateUser('cheolsu', '철수 &#8226; cheolsu님 외 33명이 팔로우합니다', '../../Icon/profile.jpeg'),
    CreateUser('younghee', '영희 &#8226; younghee님 외 12명이 팔로우합니다', '../../Icon/profile.jpeg'),
    CreateUser('gildong', '길동 &#8226; gildong님 외 45명이 팔로우합니다', '../../Icon/profile.jpeg')
]

// 사용자 검색 기능
UserSearchInput.addEventListener('input', function() {
    const query = UserSearchInput.value.toLowerCase();

    if (query ==='') {
        UserSearchNoResult.style.display = 'none';
        UserSearchRecent.style.display = 'block';
        UserSearchClearBtn.style.display = 'none';
        UserSearchBox.style.marginBottom = '0px';
    }
    else{
        UserSearchClearBtn.style.display = 'block';
        UserSearchNoResult.style.display = 'block';
        UserSearchRecent.style.display = 'none';
        UserSearchBox.style.marginBottom = '20px';

    }

    rendersearchResults(userData);
});


// 검색 결과 렌더링 함수
function rendersearchResults(data) {
    UserSearchNoResult.innerHTML = '';

    let ListHtml = '<ul class="user-search-separator">';
    data.forEach(user => {
        ListHtml += `
            <li class="user-search-ls">
                <button class="user-search-ls-btn">
                    <img class="user-search-img" src="${user.img}" alt="프로필">
                    <div class="user-search-information">
                        <span class="user-search-username">${user.id}</span>
                        <span class="user-search-stat">${user.stat}</span>
                    </div>
                </button>
            </li>
        `;
    });

    ListHtml += '</ul>';
    UserSearchNoResult.innerHTML = ListHtml;
}

document.addEventListener('click', function(event) {
    const CurrentDisplay = window.getComputedStyle(UserSearchModal).display;
    if (CurrentDisplay === 'flex'){
        if(!UserSearchModal.contains(event.target)){
            UserSearchModal.style.display = 'none';
            UserSearchInput.value = '';
            UserSearchNoResult.style.display = 'none';
            UserSearchNoResult.innerHTML = '';
            UserSearchClearBtn.style.display = 'none';
            UserSearchBox.style.marginBottom = '0px';
        }
    }
});

document.addEventListener('click', function(event) {
    const UserBtn = event.target.closest('.user-search-ls-btn');
    if(UserBtn){
        window.location.href = '../../MyProfile/myprofilepage.html';
    }
});