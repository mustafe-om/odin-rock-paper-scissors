function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1;

  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  const choice = prompt("Enter your choice").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissor") {
    return choice;
  } else {
    return "Enter a Valid Choice";
  }
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

// console.log(playRound(humanSelection, computerSelection));

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
      return "draw";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      return `You lose! paper beats rock`;
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
      humanScore++;
      return `You win! rock beats scissor`;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      return `You win! paper beats rock`;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      return `Draw!`;
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
      computerScore++;
      return `You lose! scissor beats paper`;
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
      computerScore++;
      return `You lose! rock beats scissor`;
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
      humanScore++;
      return `You win! s cissor beats paper`;
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
      return `Draw!`;
    }
  }

  for (i = 0; i < 6; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }

  if (humanScore > computerScore) {
    return `You win ${humanScore} to ${computerScore}`;
  } else if (humanScore < computerScore) {
    return `You lose ${humanScore} to ${computerScore}`;
  } else {
    return ` Draw  ${humanScore} to ${computerScore}`;
  }
}

console.log(playGame());
