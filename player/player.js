//👩‍💻 보드판 배열에 순서대로 저장하기=================================

const arr = []; //보드판 순서대로 배열 저장
let currentPosition = 0; // 캐릭터 말의 초기 위치 (인덱스)


// 1~7 cell 배열에 저장
const row1Elements = document.querySelectorAll('.row:last-child .cell');
const row1Arr = Array.from(row1Elements).reverse(); // 첫 번째 .row 요소의 자식 요소를 역순으로 저장
arr.push(...row1Arr);

//9, 11, 13, 15, 17 cell 배열에 저장
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

//16, 14, 12, 10, 8 cell 배열에 저장
const middle2Elements = ['16', '14', '12', '10', '8'];
for (const id of middle2Elements) {
    const element = document.getElementById(id);
    if (element) {
        arr.push(element);
    }
}

console.log(arr);


//요소 추가=======================================================================
//red, blue 초기 위치 0으로 설정
let redPlayerPosition = 0; 
let bluePlayerPosition = 0;

// 주사위를 굴리는 함수 정의
function rollDice() {
    // 1에서 6 사이의 랜덤한 정수 생성
    return Math.floor(Math.random() * 6) + 1;
}

// 플레이어의 캐릭터 말을 이동시키는 함수 정의
function movePlayer(player) {
    const diceRoll = rollDice(); // 주사위를 굴린 값
    console.log(`${player}의 주사위 값:`, diceRoll);

    // 플레이어의 현재 위치에 따라 새로운 위치 계산
    let currentPosition = (player === 'redPlayer') ? redPlayerPosition : bluePlayerPosition;
    const newPosition = currentPosition + diceRoll;

    // 새로운 위치가 보드판을 벗어나지 않도록 처리
    if (newPosition < arr.length) {
        currentPosition = newPosition;
    } else {
        // 보드판을 한 바퀴 돌고 나서 다시 처음부터 시작
        currentPosition = newPosition % arr.length;
    }

    // 플레이어의 위치 업데이트
    if (player === 'redPlayer') {
        redPlayerPosition = currentPosition;
    } else {
        bluePlayerPosition = currentPosition;
    }

    console.log(`${player}의 이동 후 위치:`, currentPosition);
    console.log(arr[currentPosition]); //현재 위치의 div✨
}


// 플레이어의 위치에 캐릭터 말을 업데이트하는 함수 정의
function updatePlayerPosition(player, position) {
    // 이전 위치의 플레이어 캐릭터 말 제거
    // const board = document.getElementById('board');
    // const playerDiv = document.querySelector(`#${player}`);
    // if (playerDiv) {
    //     board.removeChild(playerDiv);
    // }

    // 새로운 위치에 플레이어 캐릭터 말 추가
    const targetDiv = document.querySelector(`#${arr[currentPosition]}`);
    const playerElement = document.createElement('div');
    playerElement.className = `player ${player}`; //red면 class="player redplayer"
    //playerElement.innerHTML = `<img src="../player/img/bluePlayer.png" alt="플레이어2">`;
    targetDiv.appendChild(playerElement);
    // console.log(targetDiv); //현재 위치의 div✨🥲🥲🥲🥲🥲🥲
}



// 예시: 주사위를 굴리고 플레이어들의 캐릭터 말 이동하기
movePlayer('redPlayer'); // 빨간 플레이어의 턴
movePlayer('bluePlayer'); // 파란 플레이어의 턴











// function movingBlue(){
//     const $blueTeam = document.createElement('div');
//     $blueTeam.classList.add('player');
//     $blueTeam.id = 'bluePlayer';
//     // arr[$blueTeam].appendChild($userSpan);
// };
// function movingRed(){
//     const $blueTeam = document.createElement('div');
//     $blueTeam.classList.add('player');
//     $blueTeam.id = 'redPlayer';
//     // arr[$blueTeam].appendChild($userSpan);
// };
// function removeRed() {
//     for (let i of arr) {
//         let $spans = [...i.children];// td안에 span 들을 배열로 만든게 $spans
//         // console.log($spans);
//         for (let d of $spans) {
//             if (div.classList.contains('player') && t.classList.contains('redPlayer')) {
//                 div.classList.remove('player');
//                 div.classList.remove('redPlayer');
//             }
//         }
//     }
// }
// function removeBlue() {
//     for (let i of arr) {
//         let $spans = [...i.children];// td안에 span 들을 배열로 만든게 $spans
//         // console.log($spans);
//         for (let d of $spans) {
//             if (div.classList.contains('player') && t.classList.contains('bluePlayer')) {
//                 div.classList.remove('player');
//                 div.classList.remove('bluePlayer=');
//             }
//         }
//     }
// }