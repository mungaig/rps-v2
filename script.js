let humanScore = 0;
let computerScore = 0;
//Getting the computer's choice
function getComputerChoice(){
    const choiceList = ['rock', 'paper', 'scissors'];
    //Math.random() works great here because arrays are indexed from 0
    const computerChoice = choiceList[Math.floor(Math.random() * choiceList.length)];
    console.log(computerChoice);
}

function getHumanChoice(){
    let playerChoice = prompt('rock, paper, scissors').toLowerCase();
    console.log(playerChoice);
}

