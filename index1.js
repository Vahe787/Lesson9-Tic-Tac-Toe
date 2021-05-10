function generatePos() {
  let posX = Math.floor(Math.random() * 3);
  let posY = Math.floor(Math.random() * 3);
  return [posX, posY];
}
function checkResult(desk) {
  if (
    desk[0][0] === desk[1][1] &&
    desk[0][0] === desk[2][2] &&
    desk[0][0] !== undefined
  ) {
    return true;
  }
  if (
    desk[0][2] === desk[1][1] &&
    desk[0][2] === desk[2][0] &&
    desk[0][2] !== undefined
  ) {
    return true;
  }
  for (let i = 0; i < desk.length; i++) {
    if (
      desk[i][0] === desk[i][1] &&
      desk[i][0] === desk[i][2] &&
      desk[i][0] !== undefined
    ) {
      return true;
    }
    if (
      desk[0][i] === desk[1][i] &&
      desk[0][i] === desk[2][i] &&
      desk[0][i] !== undefined
    ) {
      return true;
    }
  }
  return false;
}
function runTicTacToe() {
  let desk = [[], [], []];
  let player = "X";
  console.log(desk);
  for (let i = 0; i < 9; i++) {
    let randomArr = generatePos();
    if (desk[randomArr[0]][randomArr[1]] === undefined) {
      desk[randomArr[0]][randomArr[1]] = player;
      if (checkResult(desk)) {
        return `Player ${player} win!`;
      } else if (i === 8) {
        return "Draw!";
      }
      if (player === "X") {
        player = "O";
      } else {
        player = "X";
      }
    } else {
      i--;
    }
  }
}

console.log(runTicTacToe());
