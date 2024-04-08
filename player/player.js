// 보드판 배열에 순서대로 저장하기
const arr = []; // 보드판 순서대로 배열 저장
let currentPosition = 0; // 캐릭터 말의 초기 위치 (인덱스)
const $diceBtn = document.querySelector(".diceBtn");
const $player1 = document.getElementById("redPlayer");
const $player2 = document.getElementById("bluePlayer");
let currentPlayer = 'redPlayer'; // 초기 턴은 빨간 플레이어로 설정
let redPlayerPosition = 0; // 빨간 플레이어의 초기 위치
let bluePlayerPosition = 0; // 파란 플레이어의 초기 위치

// 1~7 cell 배열에 저장
const row1Elements = document.querySelectorAll('.row:last-child .cell');
const row1Arr = Array.from(row1Elements).reverse(); // 첫 번째 .row 요소의 자식 요소를 역순으로 저장
arr.push(...row1Arr);

// 9, 11, 13, 15, 17 cell 배열에 저장
const middle1Elements = ['9', '11', '13', '15', '17'];
for (const id of middle1Elements) {
    const element = document.getElementById(id);
    if (element) {
        arr.push(element);
    }
}

// 18~24 cell 배열에 저장
const row2Elements = document.querySelectorAll('.row:first-child .cell');
const row2Arr = Array.from(row2Elements); // 두 번째 .row 요소의 자식 요소를 역순으로 저장
arr.push(...row2Arr);

// 16, 14, 12, 10, 8 cell 배열에 저장
const middle2Elements = ['16', '14', '12', '10', '8'];
for (const id of middle2Elements) {
    const element = document.getElementById(id);
    if (element) {
        arr.push(element);
    }
}

// 주사위를 굴리는 함수 정의
function rollDice() {
    // 1에서 6 사이의 랜덤한 정수 생성
    const diceResult = Math.floor(Math.random() * 6) + 1;
    return diceResult;
}

// 주사위 버튼 클릭 이벤트
$diceBtn.addEventListener("click", () => {
    // 주사위 굴리기
    const diceResult = rollDice(); // 주사위 결과 값 저장
    console.log(`주사위 값: ${diceResult}`);

    // 현재 플레이어의 위치 업데이트 및 캐릭터 말 이동
    movePlayer(currentPlayer, diceResult); // 현재 플레이어의 이동
    updatePlayerPosition(currentPlayer); // 현재 플레이어의 위치 업데이트

    // 플레이어 전환
    currentPlayer = (currentPlayer === 'redPlayer') ? 'bluePlayer' : 'redPlayer'; // 플레이어 턴 전환

    // 현재 플레이어 출력
    console.log(`현재 플레이어: ${currentPlayer}`);
});

// 플레이어의 현재 위치를 가져오는 함수 정의
function getCurrentPlayerPosition() {
    return (currentPlayer === 'redPlayer') ? redPlayerPosition : bluePlayerPosition;
}

// 플레이어의 캐릭터 말을 이동시키는 함수 정의
function movePlayer(player, diceRoll) {
    // 플레이어의 현재 위치 가져오기
    let currentPosition = getCurrentPlayerPosition();

    // 새로운 위치 계산
    const newPosition = currentPosition + diceRoll;

    // 보드판을 한 바퀴 돌면 처음부터 다시 시작
    if (newPosition >= arr.length) {
        currentPosition = newPosition % arr.length;
    } else {
        currentPosition = newPosition;
    }

    // 플레이어의 위치 업데이트
    if (player === 'redPlayer') {
        redPlayerPosition = currentPosition;
    } else {
        bluePlayerPosition = currentPosition;
    }

    console.log(`${player}의 이동 후 위치:`, currentPosition);
    console.log(arr[currentPosition]);//------------------------------------🐟
}

// 플레이어의 위치에 캐릭터 말을 업데이트하는 함수 정의
function updatePlayerPosition(player) {
    // 이전 위치의 플레이어 캐릭터 말 제거
    const playerDiv = document.querySelector(`.${player}`);
    if (playerDiv) {
        playerDiv.remove(); // 이전 위치의 플레이어 캐릭터 말 요소 삭제
    }

    // 새로운 위치에 플레이어 캐릭터 말 추가
    const targetDiv = arr[getCurrentPlayerPosition()]; // 현재 플레이어의 위치에 해당하는 보드판 요소 가져오기
    const playerElement = document.createElement('div');
    playerElement.className = `player ${player}`; // red면 class="player redplayer"
    targetDiv.appendChild(playerElement); // 새로운 위치에 플레이어 캐릭터 말 추가
}
