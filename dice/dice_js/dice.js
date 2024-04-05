const $diceBtn = document.querySelector(".diceBtn");
const $rollDiceVideo = document.querySelector(".rollDiceVideo");
const $player1 = document.querySelector(".player1");
const $player2 = document.querySelector(".player2");
let $diceResult = 0;
let $diceCount = 0;

function rollDice() {
  $diceResult = Math.floor(Math.random() * 6) + 1;
  return $diceResult;
}
function checkPlayer() {
  if ($diceCount % 2 === 1) {
    console.log($player1);
  } else {
    console.log($player2);
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
