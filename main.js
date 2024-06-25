const container = document.querySelector(".container");
const cell = document.querySelectorAll(".cell");
const reload = document.querySelector("#reload");
const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let runGame = true;
let currentPlayer = "x";

let options = ["","","","","","","","",""];

cell.forEach(cell =>{
    cell.addEventListener("click",handleclick);
});

function handleclick(e){
    let currentPosition = this.getAttribute("mydata");
    updateCell(this,currentPosition);
    console.log(this);
}

function updateCell(cell,index){
        options[index] = currentPlayer;
        cell.textContent = `${currentPlayer }`;    
        changePlayer();
        checkWin();
        
}
function changePlayer(){
    if(currentPlayer == "x"){
        currentPlayer = "o";
    }else{
        currentPlayer = "x";
    }
}
function checkWin(){
    for (let i = 0; i < winCondition.length; i++) {
         let cellA = winCondition[i][0];
         let cellB = winCondition[i][1];
         let cellC = winCondition[i][2];

         if(options[cellA] == "x" && options[cellB] == "x" && options[cellC] == "x" ){
            console.log("x wins");
        }else if(options[cellA] == "o" && options[cellB] == "o" && options[cellC] == "o" ){
            console.log("o wins");
        }
        if(!options.includes("")){
            console.log("draw");
        }
}}

function restartGame(){
    location.reload();
}
