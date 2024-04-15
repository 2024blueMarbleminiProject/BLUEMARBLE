//<================================ 변수 선언 영역 =========================================>//
const arr = []; // 보드판 순서대로 배열 저장
let currentPosition = 0; // 캐릭터 말의 초기 위치 (인덱스)
const $diceBtn = document.querySelector(".diceBtn");
const $player1 = document.getElementById("redPlayer");
const $player2 = document.getElementById("bluePlayer");
const $diceImg = document.querySelector(".dice-image");
let currentPlayer = "redPlayer"; // 초기 턴은 빨간 플레이어로 설정
let redPlayerPosition = 0; // 빨간 플레이어의 초기 위치
let bluePlayerPosition = 0; // 파란 플레이어의 초기 위치

// 돈과 관련된 변수
let redPlayerMoney = document.getElementById("A-money");
let bluePlayerMoney = document.getElementById("B-money");
let redPlayerRound = document.getElementById("A-round");
let bluePlayerRound = document.getElementById("B-round");

// 1~7 cell 배열에 저장
const row1Elements = document.querySelectorAll(".row:last-child .cell");
const row1Arr = Array.from(row1Elements).reverse(); // 첫 번째 .row 요소의 자식 요소를 역순으로 저장
arr.push(...row1Arr);

// "8", "9", "10", "11", "12"cell 배열에 저장
const middle1Elements = ["8", "9", "10", "11", "12"];
for (const id of middle1Elements) {
  const element = document.getElementById(id);
  if (element) {
    arr.push(element);
  }
}

// 13~19 cell 배열에 저장
const row2Elements = document.querySelectorAll(".row:first-child .cell");
const row2Arr = Array.from(row2Elements); // 두 번째 .row 요소의 자식 요소를 역순으로 저장
arr.push(...row2Arr);

// "20", "21", "22", "23", "24" cell 배열에 저장
const middle2Elements = ["20", "21", "22", "23", "24"];
for (const id of middle2Elements) {
  const element = document.getElementById(id);
  if (element) {
    arr.push(element);
  }
}

// 땅에 대한 정보 객체로 정리한 것. 해당 번호는 셀의 id값과 동일함. 이걸 이용해야할 듯----
const lands = {
  1: { name: "타이베이", price: 50000, owner: null },
  2: { name: "베이징", price: 80000, owner: null },
  3: { name: "마닐라", price: 80000, owner: null },
  4: { name: "제주", price: 200000, owner: null },
  5: { name: "싱가포르", price: 100000, owner: null },
  6: { name: "무인도", price: 0 },
  7: { name: "아테네", price: 140000, owner: null },
  8: { name: "코펜하겐", price: 160000, owner: null },
  9: { name: "스톡홀롬", price: 160000, owner: null },
  10: { name: "베를린", price: 180000, owner: null },
  11: { name: "오타와", price: 200000, owner: null },
  12: { name: "사회복지기금 기부", price: 0 },
  13: { name: "부에노스아이레스", price: 220000, owner: null },
  14: { name: "상파울루", price: 240000, owner: null },
  15: { name: "시드니", price: 240000, owner: null },
  16: { name: "부산", price: 500000, owner: null },
  17: { name: "하와이", price: 260000, owner: null },
  18: { name: "우주여행", price: 200000 }, //이것도 돈이 있어야 할 수 있게 일단 해둠. 20만원!
  19: { name: "도쿄", price: 300000, owner: null },
  20: { name: "컬럼비아호", price: 450000, owner: null },
  21: { name: "파리", price: 320000, owner: null },
  22: { name: "뉴욕", price: 350000, owner: null },
  23: { name: "서울", price: 1000000, owner: null },
  24: { name: "출발", price: 0 },
};



//<======================================= 함수 정의 영역 ===========================================>//

// 주사위를 굴리는 함수 정의
function rollDice() {
  // 1에서 6 사이의 랜덤한 정수 생성
  const diceResult = Math.floor(Math.random() * 6) + 1;
  return diceResult;
}

// 플레이어의 현재 위치를 가져오는 함수 정의
function getCurrentPlayerPosition() {
  return currentPlayer === "redPlayer" ? redPlayerPosition : bluePlayerPosition;
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
    if (player === "redPlayer") {
      console.log(`${player}의 돈을 올리세요`);
      setTimeout(function () {
        alert("🚗RED PLAYER님\n월급 200,000원 축하드립니다!!");
      }, 1600);
      redPlayerMoney.textContent = +redPlayerMoney.textContent + 200000;
      redPlayerRound.textContent = +redPlayerRound.textContent + 1;
    } else {
      console.log(`${player}의 돈을 올리세요`);
      setTimeout(function () {
        alert("🚙BLUE PLAYER님\n월급 200,000원 축하드립니다!!");
      }, 1600);
      bluePlayerMoney.textContent = +bluePlayerMoney.textContent + 200000;
      bluePlayerRound.textContent = +bluePlayerRound.textContent + 1;
    }
  } else {
    currentPosition = newPosition;
  }

  // 플레이어의 위치 업데이트
  if (player === "redPlayer") {
    redPlayerPosition = currentPosition;
  } else {
    bluePlayerPosition = currentPosition;
  }

  // 사회복지기금 칸 이벤트
  if (player === "redPlayer") {
    if (currentPosition === 12) {
      setTimeout(function () {
        alert("🚗RED PLAYER님\n 50만원 기부 감사합니다🤗");
      }, 1600);
      redPlayerMoney.textContent = +redPlayerMoney.textContent - 500000;
      console.log("사회복지기금 Red");
    }
  } else {
    if (currentPosition === 12) {
      bluePlayerMoney.textContent = +bluePlayerMoney.textContent - 500000;
      setTimeout(function () {
        alert("🚙BLUE PLAYER님\n 50만원 기부 감사합니다🤗");
      }, 1600);
      console.log("사회복지기금 Blue");
    }
  }

  // 무인도 칸 이벤트
  if (player === "redPlayer") {
    if (currentPosition === 6) {
      setTimeout(function () {
        alert(
          "🚗RED PLAYER님\n 무인도에 불시착했습니다..30만원을 내고 구조선을 불렀습니다😥"
        );
      }, 1600);
      redPlayerMoney.textContent = +redPlayerMoney.textContent - 300000;
      console.log("무인도 Red");
    }
  } else {
    if (currentPosition === 6) {
      setTimeout(function () {
        alert(
          "🚙BLUE PLAYER님\n 무인도에 불시착했습니다..30만원을 내고 구조선을 불렀습니다😥"
        );
      }, 1600);
      bluePlayerMoney.textContent = +bluePlayerMoney.textContent - 300000;
      console.log("무인도 Blue");
    }
  }

  // 우주여행 칸 이벤트
  if (player === "redPlayer") {
    if (currentPosition === 18) {
      let spacePosition;
      do {
        spacePosition = +prompt(
          "🚗RED PLAYER님!\n이동하고 싶은 도시의 숫자를 입력해주세요!! (출발부터 0~23)"
        );
        if (spacePosition < 0 || spacePosition > 23 || isNaN(spacePosition)) {
          alert("가고싶은 도시의 숫자를 0~23까지의 숫자로 선택하세요");
        }
      } while (spacePosition < 0 || spacePosition > 23 || isNaN(spacePosition));

      // 입력된 도시 위치에 따라 턴 수와 돈 조정
      if (spacePosition >= 1 && spacePosition <= 17) {
        // 1~17 사이의 도시 선택 시
        redPlayerMoney.textContent = +redPlayerMoney.textContent + 200000;
        redPlayerRound.textContent = +redPlayerRound.textContent + 1;
      }

      // 플레이어 위치 업데이트
      redPlayerPosition = spacePosition;
      console.log("우주여행 Red");
    }
  } else {
    if (currentPosition === 18) {
      let spacePosition;
      do {
        spacePosition = +prompt(
          "🚙BLUE PLAYER\n어디든지 가고싶은 도시를 숫자로 입력하세요!! (출발부터 0~23)"
        );
        if (spacePosition < 0 || spacePosition > 23 || isNaN(spacePosition)) {
          alert("가고싶은 도시를 0~23까지의 숫자로 선택하세요");
        }
      } while (spacePosition < 0 || spacePosition > 23 || isNaN(spacePosition));

      // 입력된 도시 위치에 따라 턴 수와 돈 조정
      if (spacePosition >= 1 && spacePosition <= 17) {
        // 1~17 사이의 도시 선택 시
        bluePlayerMoney.textContent = +bluePlayerMoney.textContent + 200000; // 돈 +20만원
        bluePlayerRound.textContent = +bluePlayerRound.textContent + 1; // 턴 수 +1
      }

      // 플레이어 위치 업데이트
      bluePlayerPosition = spacePosition;
      console.log("우주여행 Blue");
    }
  }

  console.log(`${player}의 이동 후 위치:`, currentPosition);
  console.log(arr[currentPosition]); //------------------------------------🐟
}

// 플레이어의 위치에 캐릭터 말을 업데이트하는 함수 정의
function updatePlayerPosition(player) {
  // 이전 위치의 플레이어 캐릭터 말 제거
  const playerDiv = document.querySelector(`.${player}`);
  console.log(playerDiv);
  if (playerDiv) {
    playerDiv.remove(); // 이전 위치의 플레이어 캐릭터 말 요소 삭제
  }

  // 새로운 위치에 플레이어 캐릭터 말 추가
  const targetDiv = arr[getCurrentPlayerPosition()]; // 현재 플레이어의 위치에 해당하는 보드판 요소 가져오기
  // console.log(targetDiv);
  const playerElement = document.createElement("div");
  playerElement.className = `player ${player}`; // red면 class="player redplayer"
  setTimeout(function () {
    targetDiv.appendChild(playerElement); // 새로운 위치에 플레이어 캐릭터 말 추가
  }, 1200);

  // 플레이어의 턴에만 땅을 구매할지 묻도록 수정
  if (player === currentPlayer) {
    askToBuyLand(player, getCurrentPlayerPosition());

    // // 새 위치가 땅인지 확인하여 통행료를 지불
    // payToll(player, getCurrentPlayerPosition());
  }
}

function addLandmark(player, position) {
  const cell = arr[position];

  // 이미 랜드마크가 있는지 확인
  const landmarkExists = cell.querySelector(`.${player}-landmark`);
  if (landmarkExists) {
    return; // 이미 랜드마크가 있는 경우 함수 종료
  }

  // 새로운 랜드마크 요소 생성
  const landmarkElement = document.createElement("div");
  landmarkElement.className = `landmark ${player}-landmark`; // 플레이어별 클래스 지정 (red-landmark, blue-landmark 등)

  // 랜드마크를 해당 셀에 추가
  cell.appendChild(landmarkElement);
}

function showDiceImg(diceResult) {
  if (($diceImg.style.backgroundImage = "none")) {
    $diceImg.style.backgroundImage = "url('../board/img/dice.gif')";
  }

  setTimeout(function () {
    $diceImg.style.backgroundImage = "none";
  }, 1000);

  setTimeout(function () {
    if (diceResult === 1) {
      $diceImg.style.backgroundImage =
        "url(https://cdn.icon-icons.com/icons2/2248/PNG/512/numeric_icon_136351.png)";
    } else if (diceResult === 2) {
      $diceImg.style.backgroundImage =
        "url(https://cdn.icon-icons.com/icons2/2248/PNG/512/numeric_icon_136350.png)";
    } else if (diceResult === 3) {
      $diceImg.style.backgroundImage =
        "url(https://cdn.icon-icons.com/icons2/2248/PNG/512/numeric_icon_137352.png)";
    } else if (diceResult === 4) {
      $diceImg.style.backgroundImage =
        "url(https://cdn.icon-icons.com/icons2/2248/PNG/512/numeric_icon_138340.png)";
    } else if (diceResult === 5) {
      $diceImg.style.backgroundImage =
        "url(https://cdn.icon-icons.com/icons2/2248/PNG/512/numeric_icon_138339.png)";
    } else if (diceResult === 6) {
      $diceImg.style.backgroundImage =
        "url(https://cdn.icon-icons.com/icons2/2248/PNG/512/numeric_icon_138338.png)";
    }
  }, 1300);

  setTimeout(function () {
    $diceImg.style.backgroundImage = "none";
  }, 2000);
}

// 땅을 구매할지 여부를 묻는 함수 정의
function askToBuyLand(player, position) {
  setTimeout(function () {
    const cell = arr[position];
    if (cell.classList.contains("btn") && !cell.classList.contains("Special")) {
      // 땅인지 확인
      const cellID = lands[position].name;
      const cellPrice = lands[position].price;

      if (lands[position].owner === null) {
        // 땅의 소유주가 없는 경우에만 구매 확인 대화상자 띄우기
        const buyConfirmation = confirm(
          `${player}님, 🚩${cellID} 칸에 도착했습니다.\n💰${cellPrice}원에 이 땅을 구매하시겠습니까?`
        );

        if (buyConfirmation) {
          // 구매 확인 시
          if (player === "redPlayer") {
            if (+redPlayerMoney.textContent >= cellPrice) {
              redPlayerMoney.textContent =
                +redPlayerMoney.textContent - cellPrice;
              lands[position].owner = player; // 땅의 소유주 변경

              // 랜드마크 이미지 요소 생성
              const landmarkElement = document.createElement("div");
              landmarkElement.className = `mark red-landmark`;
              console.log("랜드마크 건설");

              // 랜드마크 이미지를 해당 셀에 추가
              cell.appendChild(landmarkElement);

              alert(`🏰 ${cellID} 칸을 구매하였습니다.`);
            } else {
              alert("💸소지금이 부족합니다.💸");
              return; // 구매 실패 시 함수 종료
            }
          } else {
            if (+bluePlayerMoney.textContent >= cellPrice) {
              bluePlayerMoney.textContent =
                +bluePlayerMoney.textContent - cellPrice;
              lands[position].owner = player; // 땅의 소유주 변경

              // 랜드마크 이미지 요소 생성
              const landmarkElement = document.createElement("div");
              landmarkElement.className = `mark blue-landmark`;

              // 랜드마크 이미지를 해당 셀에 추가
              cell.appendChild(landmarkElement);

              alert(`🏰 ${cellID} 칸을 구매하였습니다.`);
              // 땅 구매후 아이콘만들기
            } else {
              alert("💸소지금이 부족합니다.💸");
              return; // 구매 실패 시 함수 종료
            }
          }
        } else {
          // 구매 취소 시
          alert("구매를 취소하였습니다.🥲");
        }
      } else {
        // 이미 소유주가 있는 경우에는 구매 확인 대화상자 띄우지 않고 통행료 지불 함수를 실행
        payToll(player, position);
      }
    }
  }, 1500);
}

// 플레이어가 다른 플레이어의 땅에 들어갔을 때 통행료를 지불하는 함수 정의
function payToll(player, position) {
  const cell = arr[position];
  if (cell.classList.contains("btn") && !cell.classList.contains("Special")) {
    // 땅인지 확인
    const landOwner = lands[position].owner; //
    const cellPrice = lands[position].price; //

    if (landOwner !== null && landOwner !== player) {
      // 땅의 소유주가 있고, 현재 플레이어와 다를 경우
      const toll = cellPrice * 2; // 통행료는 땅의 가격의 두 배

      // 통행료 차감 및 지불
      if (player === "redPlayer") {
        redPlayerMoney.textContent = +redPlayerMoney.textContent - toll;
        bluePlayerMoney.textContent = +bluePlayerMoney.textContent + toll;
      } else {
        bluePlayerMoney.textContent = +bluePlayerMoney.textContent - toll;
        redPlayerMoney.textContent = +redPlayerMoney.textContent + toll;
      }
      alert(
        `${player}님, ${landOwner}님의 땅에 들어가\n💰통행료 ${toll}원💰을 지불하였습니다.`
      );
    }
  }
}

// 게임 종료 조건 확인 및 출력 함수
function checkGameOver() {
  // 빨간 플레이어의 소지금 확인

  const redMoney = +redPlayerMoney.textContent;

  if (redMoney <= 0) {
    setTimeout(function () {
      alert(
        "🚗RED PLAYER의 소지금이 0원 이하로 떨어졌습니다.\n🚙BLUE PLAYER가 승리했습니다!"
      );
      alert("게임을 종료합니다.");
      const gameOverBox = document.querySelector(".gameoverbox");
      gameOverBox.style.zIndex = 9999;
      gameOverBox.style.opacity = 0.8;
    }, 2000);
    return; // 게임 종료 후 더 이상 코드를 실행하지 않음
  }

  // 파란 플레이어의 소지금 확인
  const blueMoney = +bluePlayerMoney.textContent;
  if (blueMoney <= 0) {
    setTimeout(function () {
      alert(
        "🚙BLUE PLAYER의 소지금이 0원 이하로 떨어졌습니다. \n🚗RED PLAYER가 승리했습니다!"
      );
      alert("게임을 종료합니다.");
      const gameOverBox = document.querySelector(".gameoverbox");
      gameOverBox.style.zIndex = 9999;
      gameOverBox.style.opacity = 0.8;
    }, 2000);

    return; // 게임 종료 후 더 이상 코드를 실행하지 않음
  }
}

//<================================ 이벤트 실행 영역 ================================>//

// 주사위 버튼 클릭 이벤트
$diceBtn.addEventListener("click", (event) => {
  // 주사위 굴리기
  const diceResult = rollDice(); // 주사위 결과 값 저장

  console.log(`주사위 값: ${diceResult}`);

  // 이벤트 전파 중지
  event.stopPropagation();

  // 현재 플레이어의 위치 업데이트 및 캐릭터 말 이동
  movePlayer(currentPlayer, diceResult); // 현재 플레이어의 이동

  updatePlayerPosition(currentPlayer); // 현재 플레이어의 위치 업데이트

  checkGameOver();

  showDiceImg(diceResult);

  // 플레이어 전환
  currentPlayer = currentPlayer === "redPlayer" ? "bluePlayer" : "redPlayer"; // 플레이어 턴 전환

  // 현재 플레이어 출력
  const currentPlayerDisplay = document.getElementById("currentPlayerDisplay");
  setTimeout(function () {
    currentPlayerDisplay.textContent = ` ${currentPlayer}님의 차례입니다`;
  }, 1500);
  console.log(`현재 플레이어: ${currentPlayer}`);

  // 플레이어 말 이미지 설정
  const playerTokenImg = document.getElementById("playerToken");
  if (currentPlayer === "redPlayer") {
    setTimeout(function () {
      playerTokenImg.src = "../player/img/redPlayer.png"; // 빨간 말 이미지 경로 설정
    }, 1500);
  } else {
    setTimeout(function () {
      playerTokenImg.src = "../player/img/bluePlayer.png"; // 파란 말 이미지 경로 설정
    }, 1500);
  }
});
