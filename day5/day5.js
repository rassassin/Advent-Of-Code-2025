const fs = require("fs");
const input = fs.readFileSync("./day5input.txt", "utf-8").split("\n");

function parseInput(input) {
  const rangeOfNumbersArray = input.splice(0, input.indexOf("")).map((x) => x.split("-").map(Number));
  return [input.slice(1).map(Number), rangeOfNumbersArray];
}

function findAvailableIngredients(numbersToCheck, acceptableRanges) {
  let total = 0;
  for (let i = 0; i < numbersToCheck.length; i++) {
    if (isNumberInRange(numbersToCheck[i], acceptableRanges)) total++;
  }
  return total;
}

function isNumberInRange(number, acceptableRanges) {
  for (let i = 0; i < acceptableRanges.length; i++) {
    if (number >= acceptableRanges[i][0] && number <= acceptableRanges[i][1]) return true;
  }
  return false;
}

function solveDayFive(input) {
  const [numbersToCheck, acceptableRanges] = parseInput(input);
  const solvePartOne = findAvailableIngredients(numbersToCheck, acceptableRanges);
  return { solvePartOne };
}

console.log(solveDayFive(input));
