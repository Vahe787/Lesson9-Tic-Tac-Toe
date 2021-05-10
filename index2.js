function generatePos(size) {
  let posX = Math.floor(Math.random() * size);
  let posY = Math.floor(Math.random() * size);
  return [posX, posY];
}

function checkDiagonals(desk) {
  let winnerFound = true;
  for (let i = 1; i < desk.length; i++) {
    if (desk[0][0] !== desk[i][i] || desk[i][i] === undefined) {
      winnerFound = false;
      break;
    }
  }
  if (winnerFound) {
    return true;
  } else {
    winnerFound = true;
  }
  for (let i = 1; i < desk.length; i++) {
    if (
      desk[0][desk.length - 1] !== desk[i][desk.length - 1 - i] ||
      desk[i][desk.length - 1 - i] === undefined
    ) {
      winnerFound = false;
      break;
    }
  }
  return winnerFound;
}

function checkRows(desk) {
  let winnerFound = true;
  for (let i = 0; i < desk.length; i++) {
    for (let j = 1; j < desk.length; j++) {
      if (desk[i][0] !== desk[i][j] || desk[i][j] === undefined) {
        winnerFound = false;
        break;
      }
    }
    if (winnerFound) {
      break;
    }
  }
  return winnerFound;
}

function checkColumns(desk) {
  let winnerFound = true;
  for (let i = 0; i < desk.length; i++) {
    for (let j = 1; j < desk.length; j++) {
      if (desk[0][i] !== desk[j][i] || desk[j][i] === undefined) {
        winnerFound = false;
        break;
      }
    }
    if (winnerFound) {
      break;
    }
  }
  return winnerFound;
}

function runTicTacToe(size) {
  let desk = [];
  for (let i = 0; i < size; i++) {
    desk.push([]);
  }
  let activePlayer = "X";
  for (let i = 0; i < size ** 2; i++) {
    let coordinates = generatePos(size);
    if (desk[coordinates[0]][coordinates[1]] === undefined) {
      desk[coordinates[0]][coordinates[1]] = activePlayer;
      if (checkDiagonals(desk) || checkRows(desk) || checkColumns(desk)) {
        console.log(desk);
        return `Player ${activePlayer} win!`;
      } else if (i === size ** 2 - 1) {
        console.log(desk);
        return "Draw!";
      }
      if (activePlayer === "X") {
        activePlayer = "O";
      } else {
        activePlayer = "X";
      }
    } else {
      i--;
    }
  }
}
console.log(runTicTacToe(5));
