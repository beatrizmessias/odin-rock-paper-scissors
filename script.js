function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        console.log("Computer: Rock");
        return "rock";
    } else if (choice === 1) {
        console.log("Computer: Paper");
        return "paper";
    } else if (choice === 2) {
        console.log("Computer: Scissors");
        return "scissors";
    };
}

function getHumanChoice() {
    const choice = prompt("'Rock', 'Paper' or 'Scissors'?");
    console.log("You:", choice);
    return choice;
};

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    var winner = "";

    if (humanChoice === computerChoice) {
        console.log("That's a tie!")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        console.log("");
        winner = "computer";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        console.log("");
        winner = "human";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        console.log("");
        winner = "human";
    } else if (humanChoice === "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper");
        console.log("");
        winner = "computer";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        console.log("");
        winner = "computer";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        console.log("");
        winner = "human";
    };

    return winner;
};

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}:`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const roundWinner = playRound(humanSelection, computerSelection);
        
        if (roundWinner === "computer") {
            computerScore += 1;
        } else {
            humanScore += 1;
        }
    };

    console.log("Game over!");
    if (humanScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    };

    console.log(`Final score: You ${humanScore} - ${computerScore} Computer`);
}

playGame();