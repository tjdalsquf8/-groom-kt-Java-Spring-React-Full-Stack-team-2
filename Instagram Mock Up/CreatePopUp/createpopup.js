// HTML 요소 불러오기
const CreatepopupCloseBtn = document.getElementById('create-popup-close-btn');
const selectFromComputerBtn = document.getElementById('select-from-computer-btn');
const fileInput = document.getElementById('file-input');
const ImgUpload = document.getElementById('image-upload-icon');
const instructionText = document.getElementById('instruction-text');
const CreatePopUp = document.getElementById('create-popup');

// 파일 불러오기
selectFromComputerBtn.onclick = () => {
    fileInput.click();
}

// 파일 선택 시 이미지 불러오기
fileInput.onchange = (e) => {
    const file = e.target.files[0];
    if(file){
        const reader = new FileReader();

        reader.onload = (event) => {
            // 기존 아이콘 숨기기
            ImgUpload.style.display = 'none';
            instructionText.style.display = 'none';
            selectFromComputerBtn.style.display = 'none';

            const preview = document.getElementById('image-preview');
            if(preview){
                preview.src = event.target.result;
                preview.style.display = 'block';
            }
        };
        reader.readAsDataURL(file); //파일을 읽어 데이터 URL로 변경
    }
};



// 업로드 모달 닫기 및 초기화

CreatepopupCloseBtn.onclick = () => {
    CreatePopUp.style.display = 'none';

    fileInput.value = '';
    ImgUpload.style.display = 'block';
    instructionText.style.display = 'block';
    selectFromComputerBtn.style.display = 'block';

    const preview = document.getElementById('image-preview');
    if(preview){
        preview.src = '';
        preview.style.display = 'none';
    }
}