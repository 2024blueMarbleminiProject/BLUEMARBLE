
## LUCKY DICE 🎲

### MainPage
<br>
<br>

![image](https://github.com/2024blueMarbleminiProject/BLUEMARBLE/assets/160578098/593f0f76-1b1b-4901-9d44-5f8853a28351)

<br>
<br>
<br>
<br>

## 📢 서비스 개요
- 브루마블 게임은 JavaScript로 제작된 보드 게임입니다. 
- 2인의 플레이어가 경쟁하여 승리하는 재미있는 경험을 제공합니다. 
- 언제 어디서든 무료할 때 간편한 사용자 인터페이스를 통해 쉽게 플레이해보세요!!
<br>
<br>
<br>
<br>

## 👋 팀원

- 👩‍💻 이찬희 	https://github.com/chanhee7 	<br>
- 👨‍💻 정재한		https://github.com/junglimit 	<br>
- 👨‍💻 정혜린		https://github.com/hyerin11	<br>
- 👩‍💻 주우빈		https://github.com/binwoojoo	<br>
<br>
<br>
<br>
<br>

## 🔨 기술 스택
<br>
<br>
📜 FRONT
<br>
<br>

![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white) ![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white) 
<br>
<br>
<br>
<br>

🎯 주요 기능 및 로직 소개
<br>
<br>

- 주요 기능<br>
이 화면이 게임이 전체적으로 진행되는 화면이고 레드플레이어와 블루플레이어 두명이서 게임을 진행하게됩니다
순서는 번갈아가며 진행하도록 주사위를 홀수번째로 던졌을때는 레드순서 짝수 일때는 블루순서가 되도록 구현을 했고
사이드 메뉴를 통해 보유 금액, 바퀴 수, 누구의 차례인지 시각적 정보를 제공하고있습니다 
아래에 있는 주사위 던지기 버튼을 누르면 주사위 던지는 이미지가 나온 후 주사위의 값이 나오고 플레이어가 이동을 하게됩니다
<br>
<br>

- 특수칸<br>
최대한 실제 브루마블에 있는 기능들을 구현하려고 노력을 많이 했는데 
그게 특수칸과 랜드마크 건설, 통행료 지불 등이 있었어요 설명을 드리면
먼저 출발칸을 밟거나 지나게되면 월급 20만원을 받게되고
사이드메뉴의 바퀴 수와 금액정보에 기록됩니다 무인도와 사회복지기금칸은 밟게되면 금액을 차감하게 설정했고
우주여행 같은 경우는 각 칸의 정보를 배열에 저장을 해놨기때문에 해당칸의 번호를 입력하게되면
거기로 바로 이동하게되는데 만약 출발칸을 지났다면 월급 지급과 바퀴수까지도 기록이 되게 구현을 해놨습니다

<br>
<br>

- 랜드마크 구매와 통행료 지불<br>
다음으로 랜드마크 구매와 통행료 지불입니다
땅의 정보는 전부 객체로 저장을 했고 이동한 칸이 땅인지 그리고 소유주가 없는지 확인을 하고 구매 여부를 묻게됩니다
해당 플레이어가 구매 버튼을 눌렀는데 금액이 부족하다면 그냥 리턴을 하게되고 아니면 소유자를 해당 플레이어로 변경합니다
그리고 소유자가 있는 땅을 밟았을 시에는 통행료를 지불하게되고 땅을 소유한 플레이어의 금액은 그만큼 증가합니다 
플레이를 반복하다가 누군가의 소지금이 0원이 되면 게임이 종료됩니다.

<br>
<br>
<br>
<br>
📜 개발 이력
<br>
<br>
🕘 개발 기간
<br>
2024-04-04 ~ 2024-04-15





