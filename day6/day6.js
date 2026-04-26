const fs = require("fs");
const input = fs.readFileSync("./day6input.txt", "utf-8").split("\n");

function parseInput(input) {
  let arrayOfNumberArrays = [];

  for (let i = 0; i < 4; i++) {
    const lineOfNumbers = input[i]
      .split(" ")
      .filter((x) => x)
      .map((n) => Number(n));
    arrayOfNumberArrays.push(lineOfNumbers);
  }

  arrayOfNumberArrays.push(input[4].split(" ").filter((x) => x));

  let verticalNumberArraysAndSymbols = [];

  for (let i = 0; i < arrayOfNumberArrays[0].length; i++) {
    let tempArr = [];
    for (let j = 0; j < 5; j++) {
      tempArr.push(arrayOfNumberArrays[j][i]);
    }

    verticalNumberArraysAndSymbols.push(tempArr);
  }

  return verticalNumberArraysAndSymbols;
}

function parsedInputForPartTwo(input) {
  let arrayOfNumberArrays = [];

  for (let i = 0; i < 4; i++) {
    const lineOfNumbers = input[i].split(" ");
    arrayOfNumberArrays.push(lineOfNumbers);
  }

  arrayOfNumberArrays.push(input[4].split(" ").filter((x) => x));

  return arrayOfNumberArrays;
}

function AddOrMutiliplyNumArrays(parsedInput) {
  let total = 0;

  for (let i = 0; i < parsedInput.length; i++) {
    if (parsedInput[i][4] === "*") {
      total += parsedInput[i].slice(0, 4).reduce((acc, curr) => acc * curr);
    } else {
      total += parsedInput[i].slice(0, 4).reduce((acc, curr) => acc + curr);
    }
  }

  return total;
}

function daySix(input) {
  const parsedInput = parseInput(input);
  const solvePartOne = AddOrMutiliplyNumArrays(parsedInput);

  return { solvePartOne };
}

function checkForMissingSymbol(verticalNumberArraysAndSymbols) {
  for (const lines of verticalNumberArraysAndSymbols) {
    console.log(lines);
    if (!lines[4]) {
      return lines;
    }
  }

  return "Okay";
}

const result = parseInput(input);

// fs.writeFileSync('output.txt', JSON.stringify(result, null, 2));

console.log(daySix(input));

// console.log(daySix(input))
