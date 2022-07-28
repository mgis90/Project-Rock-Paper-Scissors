function getRandomComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    }
}

function playerSelection() {
    let playerSelection = prompt("Pick between rock, paper and scissors!");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function playtrough(playerselect, computerselect) {
    if (playerselect === "rock") {
        switch (computerselect) {
            case "rock":
                return "It's a tie!";
            case "paper":
                return "Oh no, you lost!";
            case "scissors":
                return "Yes, you got him good!";
        }
    } else if (playerselect === "paper") {
        switch(computerselect) {
            case "rock":
                return "Yes, you got him good!";
            case "paper":
                return "It's a tie!";
            case "scissors":
                return "Oh no, you lost!";
        }
    } else if (playerselect === "scissors") {
        switch(computerselect) {
            case "rock":
                return "Oh no, you lost!";
            case "paper":
                return "Yes, you got him good!";
            case "scissors":
                return "It's a tie!";
        }
    }
};

function game() {
    for (let i = 0; i < 5; i++) {
        let gameResult = playtrough(playerSelection(), getRandomComputerChoice());
        switch (gameResult) {
            case "Yes, you got him good!":
                playerScore++;
                console.log(`You win this one! Current score is: ${playerScore} to ${computerScore} and ${numberOfDraws} draws!`);
                break;
            case "It's a tie!":
                numberOfDraws++;
                console.log(`Score remains the same, and is now: ${playerScore} to ${computerScore} and ${numberOfDraws} draws!`);
                break;
            case "Oh no, you lost!":
                computerScore++;
                console.log(`Sorry, you lost this one! Current score is: ${playerScore} to ${computerScore} and ${numberOfDraws} draws!`);
                break;
            }
    }

    if (playerScore > computerScore) {
        return `Congratulations, you won the game with the final score being: ${playerScore} to ${computerScore} and ${numberOfDraws} draws!`;
    } else if (playerScore === computerScore) {
        return `Your game was a tie with the final score of: ${playerScore} to ${computerScore} and ${numberOfDraws} draws!`;
    } else if (playerScore < computerScore) {
        return `Sorry, you lost this game. Don't give up, and try again! Final score was: ${playerScore} to ${computerScore} and ${numberOfDraws} draws!`;
    }
}

let playerScore = 0;
let computerScore = 0;
let numberOfDraws = 0;

console.log(game());

