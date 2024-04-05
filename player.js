
// 플레이어 이동 함수(임시) : 테스트 해보고 움직이는걸 봐야함
function movePlayer1(player, dice){
  if(player === player1){
  player1.curruntLocation += dice;
  } else{
    player2.curruntLocation += dice;
  };
};

// 플레이어 이동 함수 (자연스럽게 이동하기) : 테스트 해봐야함
function movePlayer2(player, dice) {
  const newPosition = player.currentLocation + dice;
  const $playerElement = document.getElementById('player');
  // css에 트랜지션,ease-in-out 넣기
  $playerElement.style.transform = `translateX(${newPosition * 50}px)`; // div칸 넓이
  player.currentLocation = newPosition;
}

// 플레이어 객체 정의
const player1 = {
  id: 1,
  currentLocation: 0, // 초기 위치
  totalMoney: 3000000
};

const player2 = {
  id: 2,
  currentLocation: 0 
};

// 주사위 굴리기
const diceRoll = () => {
  // 주사위 값 생성 (임시)
  const dice = Math.floor(Math.random() * 6) + 1;
  return dice;
};

