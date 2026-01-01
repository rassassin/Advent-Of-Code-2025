const fs = require("fs");
const input = fs.readFileSync("./day2input.txt", "utf-8").split("\n");

function parseInput(input) {
  const newInput = input[0].split(/[,-]/);
  return newInput;
}

function findNumbersThatArePalindromicIsh(parsedInput) {
  let total = 0;
  for (let i = 0; i < parsedInput.length; i += 2) {
    for (let j = Number(parsedInput[i]); j <= Number(parsedInput[i + 1]); j++) {
      if (j.toString().length % 2 != 0) continue;
      const partOne = j.toString().slice(0, j.toString().length / 2);
      const partTwo = j.toString().slice(j.toString().length / 2, j.toString().length);
      if (partOne == partTwo) {
        total += j;
      }
    }
  }
  return total;
}

function findNumbersThatAreTrulyPalindromic(parsedInput) {
  let total = 0;
  for (let i = 0; i < parsedInput.length; i += 2) {
    for (let j = Number(parsedInput[i]); j <= Number(parsedInput[i + 1]); j++) {
      const partOne = j.toString().slice(0, j.toString().length / 2);
      const partTwo = j.toString().slice(j.toString().length / 2, j.toString().length);
      if (partOne == partTwo || hasRepeatingSequences(j.toString())) {
        if (j) total += j;
      }
    }
  }
  return total;
}

function hasRepeatingSequences(numberString) {
  let pattern = "";
  for (let i = 0; i < numberString.length; i++) {
    if (!pattern.includes(numberString[i])) {
      pattern += numberString[i];
    }
  }
  let splitStr = numberString.split(pattern);
  let filtered = splitStr.filter((elm) => elm);
  if (filtered.length === 0 && pattern.length < numberString.length / 2) {
    return true;
  }
  return false;
}

function solveDayTwo(input) {
  const parsedInput = parseInput(input);
  const PartOne = findNumbersThatArePalindromicIsh(parsedInput);
  const PartTwo = findNumbersThatAreTrulyPalindromic(parsedInput);

  return { PartOne, PartTwo };
}

const n = 10;
const start = performance.now();
for (let i = 0; i < n; i++) {
  solveDayTwo(input);
}

const elapsed = performance.now() - start;
console.log(solveDayTwo(input));
console.log(elapsed / n);

// z= (m * 10^d) + m

// function generatePalindromicIshNumbers(parsedInput) {
//   const numbersMap = {};

//   for (let i = 0; i < parsedInput[3].length; i += 2) {
//     let endPoint = Number(parsedInput[i + 1]);
//     let startPoint;

//     if (parsedInput[i].length % 2 != 0 && parsedInput[i + 1].length != 0) continue;

//     if (parsedInput[i].length % 2 == 0) {
//       startPoint = parsedInput[i].length / 2;
//     } else {
//       minimumNumber = Math.pow(10, parsedInput[i].length);
//       startPoint = minimumNumber.toString().length / 2;
//       if (minimumNumber > endPoint) continue;
//     }
//     for (let j = startPoint; j < endPoint - startPoint; j++) {
//       let palindromicIshNumber = j * 10 ** j.toString.length + j;
//       if (palindromicIshNumber > endPoint) break;
//       if (palindromicIshNumber == Number(palindromicIshNumber.toString().split("").reverse().join(""))) numbersMap[palindromicIshNumber] = palindromicIshNumber;
//     }
//   }
//   return numbersMap;
// }
