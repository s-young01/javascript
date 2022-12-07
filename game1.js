// 변수 설정
// 컴퓨터 점수, 사람 점수, 남은 슛 횟수
// html에서 변경되는 요소

// html요소
let shortleftElem = document.querySelector('#short_left');
let comScoreElem = document.querySelector('#com_score');
let userScoreElem = document.querySelector('#user_score');
let textElem = document.querySelector('#text');
let comBtn = document.querySelector('.com_btn');
let userBtn = document.querySelectorAll('.user_btn');

// 오브젝트 만들기
// 컴퓨터 오브젝트
let com = {
    score : 0,
    percent2 : 0.5,
    percent3 : 0.3
}
// 사용자 오브젝트
let user = {
    score : 0,
    percent2 : 0.5,
    percent3 : 0.3
}
// 게임 오브젝트
let game = {
    isComTurn : true,
    shortLeft : 5
}

// 컴퓨터 먼저 슛
// 2점 슛인지 3점 슛인지 랜덤으로 결정
// 2점 슛 -> 50%로 성공 / 3점 슛 -> 30%로 성공
// 컴퓨터가 슛을 할 때 동작하는 함수

// 남은 슛 횟수 화면에 띄우기
shortleftElem.innerHTML = game.shortLeft;
// 컴퓨터 슛 하기를 클릭했을 때
function onComShoot () {
    // 2점인지 3점인지 랜덤 지정
    let shootType = Math.random() > 0.5 ? 2 : 3;
    // 2점 / 3점 슛일 때
    if (Math.random() < com['percent' + shootType]) {
            // 컴퓨터의 점수를 올린다
            // 점수 변경
            // 성공시 -> "컴퓨터가 2점 슛을 성공시켰습니다."
            com.score = com.score + shootType;
            comScoreElem.innerHTML = com.score;
            textElem.innerHTML = "컴퓨터가 "+ shootType +"점 슛을 성공시켰습니다.";
    } else {
        // 실패시 -> "실패했습니다."
       textElem.innerHTML = "실패했습니다.";
   }
   disabledBtn(false); 
}

// 버튼 비활성화 함수
// flag에 true가 할당 -> 사용자 버튼 비활성화 / 컴퓨터 버튼 -> 활성화
// flag에 false가 할당 -> 사용자 버튼 활성화 / 컴퓨터 버튼 -> 비활성화
function disabledBtn(flag) {
    // disabled : true면 비활성화, false면 활성화
    userBtn.forEach (btn => {
        btn.disabled = flag;
    })
    comBtn.disabled = !flag;
}

// 사용자가 2점 / 3점 슛을 클릭했을 때 
function onUserShoot(jum) {
    if (Math.random() < user['percent' + jum]) {
        // 사용자의 점수를 올린다
        // 글자 변경
        // "컴퓨터가 2점 슛을 성공시켰습니다."
        user.score = user.score + jum;
        userScoreElem.innerHTML = user.score;
        textElem.innerHTML = "당신이 "+ jum +"점 슛을 성공시켰습니다.";
    } else {
        textElem.innerHTML = "실패했습니다.";
    }
    disabledBtn(true);
    game.shortLeft = game.shortLeft-1;
    // 남은 슛 횟수를 1씩 빼주기
    // 남음 슛 횟수 화면 변경하기 
    shortleftElem.innerHTML = game.shortLeft;
    if (game.shortLeft == 0) {
        gameOver();
    }
}

// 남은 슛 횟수가 0이 됐을 때 승자를 결정하는 함수 
function gameOver () {
    if (user.score > com.score) {
        textElem.innerHTML = "승리했습니다.";
    } else if (user.score == com.score) {
        textElem.innerHTML = "비겼습니다.";
    } else {
        textElem.innerHTML = "졌습니다.";
    }
    userBtn.forEach (btn => {
        btn.disabled = true;
    })
    comBtn.disabled = true;
}