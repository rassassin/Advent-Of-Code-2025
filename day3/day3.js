const fs = require("fs");
const input = fs.readFileSync("./day3input.txt", "utf-8").split("\n");

function getTotalMaxVoltage(input) {
  let total = 0;

  for (let i = 0; i < input.length; i++) {
    const splitNumbers = input[i].split("").map(Number);
    let largestNumber = 0;
    let indexOfLargestNumber = 0;
    for (let j = 0; j < splitNumbers.length - 1; j++) {
      if (splitNumbers[j] > largestNumber) {
        largestNumber = splitNumbers[j];
        indexOfLargestNumber = j;
      }
    }
    let remainingNumbers = splitNumbers.slice(indexOfLargestNumber + 1);
    let maxSecondNumber = Math.max(...remainingNumbers);

    total += largestNumber * 10 + maxSecondNumber;
  }
  return total;
}

function partTwoSolution(input) {
  let total = 0;

  for (let i = 0; i < input.length; i++) {
    let splitNumbers = input[i].split("").map(Number);
    let indexOfLargestNumber = findLargestNumberIndex(splitNumbers);
    let numbersOfInterest = splitNumbers.slice(indexOfLargestNumber);
    while (numbersOfInterest.length > 12) {
      let didChange = false;
      for (let j = 1; j < numbersOfInterest.length; j++) {
        if (numbersOfInterest[j] > numbersOfInterest[j - 1]) {
          didChange = true;
          numbersOfInterest.splice(j - 1, 1);
          if (numbersOfInterest.length === 12) break;
          j = 0;
        }
      }
      if (!didChange) {
        numbersOfInterest = numbersOfInterest.slice(0, 12);
        break;
      }
    }
    total += Number(numbersOfInterest.join(""));
  }
  return total;
}

function findLargestNumberIndex(splitNumbers) {
  let maxIndex = 0;
  for (let i = 0; i < splitNumbers.length - 12; i++) {
    if (splitNumbers[i] > splitNumbers[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

function solveDayThree(input) {
  const partOne = getTotalMaxVoltage(input);
  const partTwo = partTwoSolution(input);

  return { partOne, partTwo };
}

const n = 1000;
const start = performance.now();
for (let i = 0; i < n; i++) {
  solveDayThree(input);
}

const elapsed = performance.now() - start;
console.log(solveDayThree(input));
console.log(elapsed / n);
