const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

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
    if(playerSelection === "ROCK")
    {
        if(computerSelection === "SCISSORS") return 1;
        else if(computerSelection === "PAPER") return -1;
        else return 0;
    }
    else if(playerSelection === "PAPER")
    {
        if(computerSelection === "ROCK") return 1;
        else if(computerSelection === "SCISSORS") return -1;
        else return 0;
    }
    else 
    {
        if(computerSelection === "PAPER") return 1;
        else if(computerSelection === "ROCK") return -1;
        else return 0;
    }
}

function game()
{   
    let computerScore = 0;
    let playerScore = 0;

    while(playerScore < 5 && computerScore < 5)
    {
        let playerSelection = "";
        rockButton.addEventListener("click", () => player="Rock");
        paperButton.addEventListener("click", () => player="Paper");
        scissorsButton.addEventListener("click", () => player="Scissors");
        let computerSelection = getComputerChoice();    
        let roundResult = playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase());

        if(roundResult === 0) console.log(`It's a tie! ${playerSelection} ties whith ${computerSelection}`);
        else if(roundResult === 1) 
        {
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else
        {
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        }
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }

    if(playerScore === 5) console.log("You win!");
    else console.log("You lose!");
}

