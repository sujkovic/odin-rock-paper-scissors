let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
let winMessage;

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        computerSelection = "rock";
    }
    else if (num === 1) {
        computerSelection = "paper";
    }
    else if (num === 2) {
        computerSelection = "scissors";
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "paper")) {
        winMessage = "It's a tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        winMessage = "You lose! Paper beats Rock"; 
        computerWins++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        winMessage = "You win! Rock beats scissors"; 
        playerWins++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        winMessage = "You win! Paper beats Rock"; 
        playerWins++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        winMessage = "You lose! Scissors beat Paper"; 
        computerWins++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        winMessage = "You lose! Rock beats scissors"; 
        computerWins++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        winMessage = "You win! Scissors beats paper"; 
        playerWins++;
    }
    return winMessage;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let play = console.log(playRound(prompt("Please choose rock, paper, or scissors"), computerPlay()))
    }

    if (playerWins > computerWins) {
        console.log("Congratulations! You beat the computer!");
    }
    else if (computerWins > playerWins) {
        console.log("Computer Wins, better luck next time");
    }
    else if (computerWins == playerWins) {
        console.log("You and the computer tied!");
    }
}

game();