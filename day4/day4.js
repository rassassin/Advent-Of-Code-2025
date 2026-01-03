const fs = require("fs");
const input = fs.readFileSync("./day4input.txt", "utf-8").split("\n");

const xDir = [-1, -1, -1, 0, 0, 1, 1, 1];
const yDir = [-1, 0, 1, -1, 1, -1, 0, 1];

function findAccessibleRolls(input) {
  let count = 0;

  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      if (input[row][col] != "@") continue;
      let isAccessible = isRollAcessisble(input, row, col);

      if (isAccessible) count++;
    }
  }
  return count;
}

function isRollAcessisble(input, row, col) {
  let count = 0;
  for (let dir = 0; dir < 8; dir++) {
    let currX = row + xDir[dir];
    let currY = col + yDir[dir];

    if (currX >= input.length || currX < 0 || currY >= input[0].length || currY < 0) continue;

    if (input[currX][currY] === "@") {
      count++;
      if (count === 4) return false;
    }
  }
  return true;
}

function parseInputInto2DArray(input) {
  let twoDArray = [];
  for (let i = 0; i < input.length; i++) {
    twoDArray.push(input[i].split(""));
  }
  return twoDArray;
}

function removeRollsAndFindNewAccessibleRolls(inputParsedInto2DArray) {
  let count = 0;
  let inputCopy = inputParsedInto2DArray.slice();
  //   let linesCheckedTwice = [0];

  for (let row = 0; row < inputCopy.length; row++) {
    for (let col = 0; col < inputCopy[row].length; col++) {
      if (inputCopy[row][col] != "@") continue;
      let isAccessible = isRollAcessisbleAndRemoveable(inputCopy, row, col);

      if (isAccessible) {
        inputCopy[row].splice(col, 1, ".");
        count++;
        // if ((row % 3 === 0 && !linesCheckedTwice.includes(row)) || row == inputCopy.length - 1) {
        //   linesCheckedTwice.push(row);
        row = 0;
        // }
      }
    }
  }
  return count;
}

function isRollAcessisbleAndRemoveable(input, row, col) {
  let count = 0;
  for (let dir = 0; dir < 8; dir++) {
    let currX = row + xDir[dir];
    let currY = col + yDir[dir];

    if (currX >= input.length || currX < 0 || currY >= input[0].length || currY < 0) continue;

    if (input[currX][currY] === "@") {
      count++;
      if (count === 4) return false;
    }
  }
  return true;
}

function solveDayFour(input) {
  const partOne = findAccessibleRolls(input);
  const inputParsedInto2DArray = parseInputInto2DArray(input);
  const partTwo = removeRollsAndFindNewAccessibleRolls(inputParsedInto2DArray);

  return { partOne, partTwo };
}

const n = 1;
const start = performance.now();
for (let i = 0; i < n; i++) {
  solveDayFour(input);
}

const elapsed = performance.now() - start;
console.log(solveDayFour(input));
console.log(elapsed / n);
