

// 무인도 들어갔을때 함수
function uninhabitedIsland() {
  if(playerLocation === island){
    alert(`무인도에 갇혔습니다. \n3턴간 움직일 수 없습니다!`)
    countdown()
    
  } 
}

let count = 0;
// 무인도 카운트 관리 
function countdown(){
  if(count < 3){
    playerLocation = currentLocation;
    alert(`${count}턴간 움직일 수 없습니다!`)
    count ++
  }else{
    alert(`무인도 탈출!`)
    playerLocation += dice; // 주사위 실행 함수
  }

}

// 우주여행 함수
function spaceTravel(){
  const $btn = document.querySelector// 셀 부모태그t
  if(playerLocation === travel){
   보드판div전체.addEventListener('click', e => {
    if(e.target === $btn)
    playerLocation = e.target.value;
   }) // css로 div전체에 hover효과를 넣어서 타겟되는 대상이 어딘지 명확하게 보이게 하기
  }
}


// 월급지급 함수
function getMoney(){
  if(player1.playerLocation === start){
    alert('월급을 지급합니다.')
    player1.totalMoney =+ 200000;
  }else{
    alert('월급을 지급합니다.')
    player2.totalMoney =+ 200000;
  }
}


// 강도 이벤트 함수

function meetRobber() {
  if(player1.playerLocation === start){
    alert('강도를 만났습니다.ㅠ')
    player1.totalMoney =- 200000;
  }else{
    alert('강도를 만났습니다.ㅠ')
    player2.totalMoney =- 200000;
  }
}