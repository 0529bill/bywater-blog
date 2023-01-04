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

### Leetcode: N-queens

```js
var solveNQueens = function (n) {
  const boards = [];

  const isSafe = (board, row, col) => {
    //vertical up
    for (let i = row - 1; i >= 0; i--) {
      if (board[i][col] === "Q") return false;
    }
    //diagonal left up
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    //diagonal right up
    for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
      if (board[i][j] === "Q") return false;
    }
    return true;
  };

  const nQueen = (board, row) => {
    console.log("board", board);
    //base 運行到最後一行時
    if (row === board.length) {
      boards.push(board.map((row) => row.join("")));

      return;
    }

    for (let j = 0; j < board.length; j++) {
      if (isSafe(board, row, j)) {
        board[row][j] = "Q";
        nQueen(board, row + 1); //function call
        board[row][j] = "."; //backtracking step;
      }
    }
  };
  nQueen(
    Array(n)
      .fill(0)
      .map((_) => Array(n).fill(".")),
    0
  );
  return boards;
};
```

Resources: https://leetcode.com/problems/n-queens/solutions/2937448/js-backtracking/?q=js&orderBy=most_relevant
