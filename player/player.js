
// const $diceBtn = document.querySelector(".diceBtn");
// const $rollDiceVideo = document.querySelector(".rollDiceVideo");
// const $player1 = document.querySelector("#redPlayer");
// const $player2 = document.querySelector("#bluePlayer");
// let $diceResult = 0;
// let $diceCount = 0;
// let totalPosition1 = 1;
// let totalPosition2 = 1;

// function rollDice() {
//   $diceResult = Math.floor(Math.random() * 6) + 1;
//   return $diceResult;
// }
// function checkPlayer() {
//   if ($diceCount % 2 === 1) {
//     movePlayer1();
//     console.log($player1);
//   } else {
//     movePlayer2();
//     console.log($player2);
//   }
// }

// function movePlayer1() {
//   if (totalPosition1 > 24) {
//     totalPosition1 = 1;
//   } else {
//     totalPosition1 += $diceResult;
//   }
//   let $moveAreaId = document.getElementById(`${totalPosition1}`);
//   $moveAreaId.innerHTML = `<img id="redPlayer" src = "../player/img/redPlayer.png" alt = "플레이어1"/>`;
//   console.log(totalPosition1);
// }

// function movePlayer2() {
//   if (totalPosition2 > 24) {
//     totalPosition2 = 1;
//   } else {
//     totalPosition2 += $diceResult;
//   }
//   let $moveAreaId = document.getElementById(`${totalPosition2}`);
//   $moveAreaId.innerHTML = `<img id="bluePlayer" src="../player/img/bluePlayer.png" alt="플레이어2" />`;
//   console.log(totalPosition2);
// }

// $diceBtn.addEventListener("click", () => {
//   $rollDiceVideo.style.display = "block";
//   setTimeout(function () {
//     $rollDiceVideo.style.display = "none";
//   }, 1600);
//   rollDice();
//   $diceCount++;
//   checkPlayer();
//   console.log(`diceResult=${$diceResult}`);
//   console.log(`diceCount=${$diceCount}`);
// });


const $diceBtn = document.querySelector(".diceBtn");
const $rollDiceVideo = document.querySelector(".rollDiceVideo");
const $player1 = document.querySelector("#redPlayer");
const $player2 = document.querySelector("#bluePlayer");
let $diceResult = 0;
let $diceCount = 0;
let totalPosition1 = 1;
let totalPosition2 = 1;

function rollDice() {
  $diceResult = Math.floor(Math.random() * 6) + 1;
  return $diceResult;
}

function checkPlayer() {
  if ($diceCount % 2 === 1) {
    movePlayer($player1, totalPosition1);
  } else {
    movePlayer($player2, totalPosition2);
  }
}

function movePlayer(player, position) {
  let newPosition = position + $diceResult;
  if (newPosition > 24) {
    newPosition -= 24; // 보드를 넘어가면 되돌아가도록 수정
  }
  let $moveAreaId = document.getElementById(`${position}`);
  $moveAreaId.innerHTML = ""; // 이전 위치의 이미지 삭제
  let $newMoveAreaId = document.getElementById(`${newPosition}`);
  $newMoveAreaId.innerHTML = player.outerHTML; // 새 위치에 플레이어 이미지 추가
  if (player === $player1) {
    totalPosition1 = newPosition;
  } else {
    totalPosition2 = newPosition;
  }
}

$diceBtn.addEventListener("click", () => {
  $rollDiceVideo.style.display = "block";
  setTimeout(function () {
    $rollDiceVideo.style.display = "none";
  }, 1600);
  rollDice();
  $diceCount++;
  checkPlayer();
  console.log(`diceResult=${$diceResult}`);
  console.log(`diceCount=${$diceCount}`);
});