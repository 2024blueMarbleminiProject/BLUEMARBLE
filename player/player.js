//👩‍💻보드판 배열에 저장하기=================================

const arr = [];

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