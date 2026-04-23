const fs = require("fs");
const input = fs.readFileSync("./day6input.txt", "utf-8").split("\n");

function parseInput(input) {
    let arrayOfNumberArrays = [];
    for (let i = 0; i < 4; i++) {
        const lineOfNumbers = input[i].split(" ").filter(v => v).map(n => Number(n));
        arrayOfNumberArrays.push(lineOfNumbers);
    }

    arrayOfNumberArrays.push(input[4].split(""))

    return arrayOfNumberArrays
}

function checkLengths(input) {
    for (const lines of input) {
        console.log(lines.length)
    }
}

console.log(checkLengths(input))