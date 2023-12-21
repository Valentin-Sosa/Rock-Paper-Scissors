let playerScore = 0;
let computerScore = 0;

const main = document.querySelector("main");
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const roundResult = document.querySelector(".results-info");
const computerInfo = document.querySelector(".computer");
const playerInfo = document.querySelector(".player");
const reset = document.querySelector(".reset-menu");
const winner = document.querySelector(".winner");
const playAgainButtton = document.querySelector(".play-again");

reset.style.display = "none";

rockButton.addEventListener('click', () => game("Rock"));
paperButton.addEventListener('click', () =>game("Paper"));
scissorsButton.addEventListener('click',() => game("Scissors"));
playAgainButtton.addEventListener('click', resetGame);

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
        roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if((playerSelection === "rock" && computerSelection === "paper")||
        (playerSelection === "paper" && computerSelection === "scissors")||
        (playerSelection === "scissors" && computerSelection === "rock"))
    {
        computerScore++;
        roundResult.textContent = `You lost! ${computerSelection} beats ${playerSelection}`;
    }
    else roundResult.textContent = `It's a tie! ${playerSelection} ties whith ${computerSelection}`;
}

function checkGameOver()
{
    if(playerScore === 5)
    {
        main.style.display = "none";
        reset.style.display = "flex";
        winner.textContent = "You win!";
    } 
    else if(computerScore === 5)
    {
        main.style.display = "none";
        reset.style.display = "flex";
        winner.textContent = "You lost!";
    } 
}

function resetGame()
{
    playerScore = 0;
    computerScore = 0;
    main.style.display = "block";
    reset.style.display = "none";
    roundResult.textContent= "Choose Your Weapon";
    playerInfo.textContent = "0";
    computerInfo.textContent = "0";
}

function game(playerSelection)
{   
    let computerSelection = getComputerChoice();    
    playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
    playerInfo.textContent = `${playerScore}`
    computerInfo.textContent = `${computerScore}`;

    checkGameOver();

}


