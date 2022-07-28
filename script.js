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
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let gameScore = playtrough(playerSelection(), getRandomComputerChoice());
        if (gameScore === "Yes, you got him good!") {
            playerScore++;
        } else if (gameScore === "Oh no, you lost!") {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        return `Congratulations, you've won ${playerScore} to ${computerScore}!`;
    } else if (playerScore === computerScore) {
        return `This game was a draw!`;
    } else if (playerScore < computerScore) {
        return `You lost ${computerScore} to ${playerScore}! But don't give up, you'll get him next time!`
    }
}
console.log(game());