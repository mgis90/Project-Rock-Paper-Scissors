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

console.log(getRandomComputerChoice());

function playerSelection() {
    let playerSelection = prompt("Pick between rock, paper and scissors!");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function playGame(playerselect, computerselect) {
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

console.log(playGame(playerSelection(), getRandomComputerChoice()));