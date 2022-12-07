// 변수 설정
// 컴퓨터 점수, 사람 점수, 남은 슛 횟수
// html에서 변경되는 요소

let comScore = 0;
let userScore = 0;
let shortLeft = 3;
let isComTurn = true;

// html요소
let shortleftElem = document.querySelector('#short_left');
let comScoreElem = document.querySelector('#com_score');
let userScoreElem = document.querySelector('#user-score');
let textElem = document.querySelector('#text');
let comBtn = document.querySelector('.com_btn');
let userBtn = document.querySelectorAll('.user_btn');

// 컴퓨터 먼저 슛
// 2점 슛인지 3점 슛인지 랜덤으로 결정
// 2점 슛 -> 50%로 성공 / 3점 슛 -> 30%로 성공
// 컴퓨터가 슛을 할 때 동작하는 함수

// 남은 슛 횟수 화면에 띄우기
shortleftElem.innerHTML = shortLeft;
// 컴퓨터 슛 하기를 클릭했을 때
function onComShoot () {
    // 2점인지 3점인지 랜덤 지정
    let shootType = Math.random() > 0.5 ? 2 : 3;
    // 2점 슛일 때
    if (Math.random() < com['percent' + shootType]) {
        // 성공했을 때
            // 컴퓨터의 점수를 올린다
            // 점수 변경
            // 성공시 -> "컴퓨터가 2점 슛을 성공시켰습니다."
            comScore = comScore + 2;
            comScoreElem.innerHTML = comScore;
            textElem.innerHTML = "컴퓨터가 "+ shootType +"점 슛을 성공시켰습니다.";
    } else {
        // 실패시 -> "실패했습니다."
       textElem.innerHTML = "실패했습니다.";
   }
    // disabled : true면 비활성화, false면 활성화
    isComTurn = false;
    userBtn.forEach (btn => {
        btn.disabled = false;
    })
    comBtn.disabled = true;
}

// 사용자가 2점 슛을 클릭했을 때 
function onUserShoot2() {
    if (Math.random() < 0.5) {
        // 사용자의 점수를 올린다
        // 글자 변경
        // "컴퓨터가 2점 슛을 성공시켰습니다."
        userScore = userScore + 2;
        userScoreElem.innerHTML = userScore;
        textElem.innerHTML = "당신이 2점 슛을 성공시켰습니다.";
    } else {
        textElem.innerHTML = "실패했습니다.";
    }
    userBtn.forEach (btn => {
        btn.disabled = true;
    })
    comBtn.disabled = false;
    // 남은 슛 횟수를 1씩 빼주기
    --shortLeft;
    // 남음 슛 횟수 화면 변경하기 
    shortleftElem.innerHTML = shortLeft;
    if (shortLeft == 0) {
        gameOver();
    }
}

function onUserShoot3() {
    if (Math.random() < 0.3) {
        // 사용자의 점수를 올린다
        // 글자 변경
        // "컴퓨터가 2점 슛을 성공시켰습니다."
        userScore = userScore + 2;
        userScoreElem.innerHTML = userScore;
        textElem.innerHTML = "당신이 2점 슛을 성공시켰습니다.";
    } else {
        textElem.innerHTML = "실패했습니다.";
    }
    userBtn.forEach (btn => {
        btn.disabled = true;
    })
    comBtn.disabled = false;
}

// 남은 슛 횟수가 0이 됐을 때 승자를 결정하는 함수 
function gameOver () {
    if (userScore > comScore) {
        textElem.innerHTML = "승리했습니다.";
    } else if (userScore == comScore) {
        textElem.innerHTML = "비겼습니다.";
    } else {
        textElem.innerHTML = "졌습니다.";
    }
    userBtn.forEach (btn => {
        btn.disabled = true;
    })
    comBtn.disabled = true;
}