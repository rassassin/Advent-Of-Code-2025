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

function solveDayFour(input) {
  const partOne = findAccessibleRolls(input);
}

console.log(findAccessibleRolls(input));
