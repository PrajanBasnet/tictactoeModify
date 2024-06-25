const container = document.querySelector(".container");
const cell = document.querySelectorAll(".cell");
const reload = document.querySelector("#reload");
const turn = document.querySelector(".turn");
const output = document.querySelector(".output");

const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let runGame = true;
let currentPlayer = "x";
let flag = 0;

let options = ["", "", "", "", "", "", "", "", ""];


cell.forEach((cell) => {
  cell.addEventListener("click", handleclick,{once:turn});
});
function handleclick(e) {
  let currentPosition = this.getAttribute("mydata");
if(runGame){
  updateCell(this, currentPosition);
  turn.textContent = `Player : ${currentPlayer}`;
}
}

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = `${currentPlayer}`;
  changePlayer();
  checkWin();
}
function changePlayer() {
  if (currentPlayer == "x") {
    currentPlayer = "o";
  } else {
    currentPlayer = "x";
  }
}
function checkWin() {
  for (let i = 0; i < winCondition.length; i++) {
    let cellA = winCondition[i][0];
    let cellB = winCondition[i][1];
    let cellC = winCondition[i][2];

    if (options[cellA] == "x" && options[cellB] == "x" && options[cellC] == "x") {
        output.textContent = `Player : X wins`;
        runGame = false;
        flag += 1;
        console.log(flag);

    } else if ( options[cellA] == "o" &&  options[cellB] == "o" && options[cellC] == "o") {
     
        output.textContent = `Player : O  wins`;
        flag += 1;
        runGame = false;    
        console.log(flag);

    }
}
if((!options.includes("")) && flag == 0) {
    output.textContent = "Game is draw press restart button";
}

}

function restartGame() {
  location.reload();
}
