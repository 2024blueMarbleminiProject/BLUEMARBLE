
## LUCKY DICE 🎲

### MainPage
<br>
<br>

![GIFMaker_me](https://github.com/2024blueMarbleminiProject/BLUEMARBLE/assets/156823236/0539574e-b724-493b-aefd-6b16f1b622de)

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
![image](https://github.com/2024blueMarbleminiProject/BLUEMARBLE/assets/160578098/593f0f76-1b1b-4901-9d44-5f8853a28351)

- 주요 기능<br>
위 화면이 게임이 전체적으로 진행되는 화면이고 레드플레이어와 블루플레이어 두명이서 게임을 진행하게됩니다
순서는 주사위를 홀수번째로 던졌을때는 레드순서, 짝수 일때는 블루순서가 되도록 구현을 했고,
사이드 메뉴를 통해 보유 금액, 바퀴 수, 누구의 차례인지 시각적 정보를 제공하고있습니다 
아래에 있는 주사위 던지기 버튼을 누르면 주사위 던지는 이미지가 나온 후 주사위의 값이 나오고 플레이어 말이 이동을 하게된다
<br>
<br>

- 특수칸(출발칸, 무인도, 사회복지기금, 우주여행)<br>
최대한 실제 브루마블에 있는 기능들을 구현하려고 노력을 했으나 무인도칸에서의 기능이 부족한 면이 있어 추후 개선 예정이다.
1. 출발칸 -> 1턴을 돌아 출발칸으로 돌아오거나 지나치면 월급 20만원을 받게된다.
2. 무인도 -> 3턴을 쉬게 된다.(추후 업데이트 예정)
3. 사회복지기금 -> 기부금 -50만원 차감된다.
4. 우주여행 -> 원하는 나라를 입력하면 이동할 수 있는 기능이며, 마찬가지로 출발칸을 지나면 월급 20만원이 추가된다.

- 사이드 메뉴바
사이드메뉴에서는 각 플레이어의 정보를 나타내며,
현재 소지금이 얼마 남았는지, 누구의 차례인지, 몇 번째 턴인지 볼 수 있도록 구현했다.
<br>
<br>

- 랜드마크 구매와 통행료 지불<br>
1. 랜드마크 구매
현재 땅의 정보를  1: { name: "타이베이", price: 50000, owner: null } 하나의 객체로 저장을 했고,
주사위 값에 따라 어느 나라로 이동해야 하는지, 가격은 얼마인지, 소유자가 있는지를 확인한 후 구매 여부를 묻게된다.
이후 구매버튼을 클릭하면, 플레이어의 소유금과 소유자 여부를 확인한 후 구매가 진행되며 구매가 완료한 후에는
소유자가 플레이어로 바뀌고, 해당 칸에는 랜드마크가 건설된다.
만약 플레이어가 구매 버튼을 눌렀으나 소유금이 부족하다면, 땅을 구매할 수 없고 다음 플레이어 차례로 넘어간다.

3. 통행료 지불
소유자가 있는 땅을 밟았을 시에는 해당 셀의 가격의 2배를 통행료로 지불하게되고,
땅을 소유한 플레이어의 금액은 2배 증가하며, 땅을 밟은 플레이어는 2배 차감된다.
그 후 한 명의 소지금이 0원 또는 그 이하가 된다면 게임은 종료된다.

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





