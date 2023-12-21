let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const results = document.querySelector(".results-info");
const computerInfo = document.querySelector(".computer");
const playerInfo = document.querySelector(".player");
const winner = document.querySelector(".winner");

playerInfo.textContent = `${playerScore}`
computerInfo.textContent = `${computerScore}`;

rockButton.addEventListener('click', () => game("Rock"));
paperButton.addEventListener('click', () =>game("Paper"));
scissorsButton.addEventListener('click',() => game("Scissors"));

function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random()*3);

    switch(randomNumber)
    {
        case 0:
            return "Rock";
        case 1: 
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Error";
    }
}

function playRound(playerSelection, computerSelection)
{
    if((playerSelection === "rock" && computerSelection === "scissors")||
       (playerSelection === "paper" && computerSelection === "rock")||
       (playerSelection === "scissors" && computerSelection === "paper"))
    {
        playerScore++;
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if((playerSelection === "rock" && computerSelection === "paper")||
        (playerSelection === "paper" && computerSelection === "scissors")||
        (playerSelection === "scissors" && computerSelection === "rock"))
    {
        computerScore++;
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else results.textContent = `It's a tie! ${playerSelection} ties whith ${computerSelection}`;
}

function game(playerSelection)
{   
    let computerSelection = getComputerChoice();    
    playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
    playerInfo.textContent = `${playerScore}`
    computerInfo.textContent = `${computerScore}`;

    if(playerScore === 5) winner.textContent = "You win!";
    else if(computerScore === 5) winner.textContent = "You lose!";
}

