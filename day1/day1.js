const fs = require("fs");
const input = fs.readFileSync("./day1input.txt", "utf-8").split("\n");

function partTwoAnswer(input) {
  let positionOfDial = 50;
  let timesAtZero = 0;

  for (let i = 0; i < input.length; i++) {
    const directionOfRotation = input[i][0];
    let clicksRotated;

    if (input[i].length > 3) {
      timesAtZero += Math.floor(Number(input[i].slice(1)) / 100) % 100;
      clicksRotated = Number(input[i].slice(-2));
    } else {
      clicksRotated = Number(input[i].slice(1));
    }

    if (directionOfRotation == "L") {
      const newPositionOfDial = positionOfDial - clicksRotated;
      if (newPositionOfDial === 0) {
        timesAtZero++;
        positionOfDial = newPositionOfDial;
        continue;
      }
      if (newPositionOfDial < 0) {
        if (positionOfDial != 0) timesAtZero++;
        positionOfDial = 100 + newPositionOfDial;
        continue;
      }
      positionOfDial = newPositionOfDial;
    }

    if (directionOfRotation == "R") {
      const newPositionOfDial = positionOfDial + clicksRotated;
      if (newPositionOfDial === 100) {
        timesAtZero++;
        positionOfDial = 0;
        continue;
      }
      if (newPositionOfDial > 100) {
        if (positionOfDial != 100) timesAtZero++;
        positionOfDial = newPositionOfDial - 100;
        continue;
      }
      positionOfDial = newPositionOfDial;
    }
  }
  return timesAtZero;
}

function passwordToOpenTheDoor(input) {
  let positionOfDial = 50;
  let timesAtZero = 0;

  for (let i = 0; i < input.length; i++) {
    const directionOfRotation = input[i][0];
    let clicksRotated = input[i].length > 3 ? Number(input[i].slice(-2)) : Number(input[i].slice(1));

    if (directionOfRotation == "L") {
      const newPositionOfDial = positionOfDial - clicksRotated;
      if (newPositionOfDial === 0) {
        timesAtZero++;
        positionOfDial = newPositionOfDial;
        continue;
      }
      if (newPositionOfDial < 0) {
        positionOfDial = 100 + newPositionOfDial;
        continue;
      }
      positionOfDial = newPositionOfDial;
    }

    if (directionOfRotation == "R") {
      const newPositionOfDial = positionOfDial + clicksRotated;
      if (newPositionOfDial === 100) {
        timesAtZero++;
        positionOfDial = 0;
        continue;
      }
      if (newPositionOfDial > 100) {
        positionOfDial = newPositionOfDial - 100;
        continue;
      }
      positionOfDial = newPositionOfDial;
    }
  }
  return timesAtZero;
}

function solveDayOne(input) {
  const partOne = passwordToOpenTheDoor(input);
  const partTwo = partTwoAnswer(input);

  return { partOne, partTwo };
}

const n = 1000;
const start = performance.now();
for (let i = 0; i < n; i++) {
  solveDayOne(input);
}

const elapsed = performance.now() - start;
console.log(solveDayOne(input));
console.log(elapsed / n);
