---
sidebar_position: 1
---

# [Leetcode-CommonProblems] 8 queens 八皇后

```js
let queen = new Array(8).fill(-1);

//計算組合數
let counter = 0;

const isLegal = function (curRow, curCol) {
  for (let prevCol = 0; prevCol < curCol; prevCol++) {
    let prevRow = queen[prevCol];

    //prevRow代表目前已經有皇后的row，在同一row的話無法再放皇后所以回傳false
    if (prevRow === curRow) {
      return false;
    }

    // row 跟 目前row距離
    let rowDiff = Math.abs(curRow - prevRow);
    //col 跟 目前col距離
    let colDiff = Math.abs(curCol - prevCol);

    //算出左、右斜線是否相同 =>

    if (rowDiff === colDiff) {
      return false;
    }
  }

  return true;
};

const eightQueen = function (curCol) {
  for (let row = 0; row < 8; row++) {
    if (isLegal(row, curCol)) {
      queen[curCol] = row;

      if (curCol !== 7) {
        eightQueen(curCol + 1);
      } else {
        //代表完成一種八皇后擺法
        counter++;
      }
    }
  }
};

//從column 0 開始一個個篩選
eightQueen(0);

//計算出總共有多少總組合
console.log(counter);
//92
```
