const buttons = document.querySelectorAll("button");
const container = document.querySelector("#container");
const div = document.createElement("div");
const human_p = document.createElement("p");
const computer_p = document.createElement("p");
const exp = document.createElement("p");

let humanChoice = "";
const computer = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

container.appendChild(div);
div.appendChild(human_p);
div.appendChild(computer_p);
div.appendChild(exp);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    humanChoice = buttons[i].textContent.toLowerCase();
    const randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = computer[randomIndex];
    const roundResult = playRound(humanChoice, computerChoice);

    human_p.textContent = `Human score = ${humanScore}`;
    computer_p.textContent = `computer score = ${computerScore}`;
    exp.textContent = `${roundResult}`;

    if (humanScore === 5 || computerScore === 5) {
      humanScore === 5
        ? (exp.textContent = `You won then game`)
        : (exp.textContent = `Computer won the game`);
      humanScore = 0;
      computerScore = 0;
      human_p.textContent = ``;
      computer_p.textContent = ``;

      console.log(`human: ${humanScore}`);
      console.log(`computer: ${computerScore}`);
    }
  });
}

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
    return `You win! scissor beats paper`;
  } else if (humanChoice === "scissor" && computerChoice === "scissor") {
    return `Draw!`;
  }
}

// const rock = document.querySelector("#rock");
// const paper = document.querySelector("#paper");
// const scissor = document.querySelector("#scissor");

// let choice = "";

// rock.addEventListener("click", () => {
//   choice = rock.textContent.toLowerCase();
//   playRound(choice, "rock");
//   console.log(playRound(choice, "rock"));
// });
// paper.addEventListener("click", () => {
//   choice = paper.textContent.toLowerCase();
//   console.log(choice);
// });
// scissor.addEventListener("click", () => {
//   choice = scissor.textContent.toLowerCase();
//   console.log(choice);
// });

// function getComputerChoice() {
//   const choice = Math.floor(Math.random() * 3) + 1;

//   if (choice === 1) {
//     return "rock";
//   } else if (choice === 2) {
//     return "paper";
//   } else {
//     return "scissor";
//   }
// }

// // function getHumanChoice() {
// //   const choice = prompt("Enter your choice").toLowerCase();
// //   if (choice === "rock" || choice === "paper" || choice === "scissor") {
// //     return choice;
// //   } else {
// //     return "Enter a Valid Choice";
// //   }
// // }

// let humanScore = 0;
// let computerScore = 0;

// function playGame() {
//   function playRound(humanChoice, computerChoice) {
//     if (humanChoice === "rock" && computerChoice === "rock") {
//       return "draw";
//     } else if (humanChoice === "rock" && computerChoice === "paper") {
//       computerScore++;
//       return `You lose! paper beats rock`;
//     } else if (humanChoice === "rock" && computerChoice === "scissor") {
//       humanScore++;
//       return `You win! rock beats scissor`;
//     } else if (humanChoice === "paper" && computerChoice === "rock") {
//       humanScore++;
//       return `You win! paper beats rock`;
//     } else if (humanChoice === "paper" && computerChoice === "paper") {
//       return `Draw!`;
//     } else if (humanChoice === "paper" && computerChoice === "scissor") {
//       computerScore++;
//       return `You lose! scissor beats paper`;
//     } else if (humanChoice === "scissor" && computerChoice === "rock") {
//       computerScore++;
//       return `You lose! rock beats scissor`;
//     } else if (humanChoice === "scissor" && computerChoice === "paper") {
//       humanScore++;
//       return `You win! s cissor beats paper`;
//     } else if (humanChoice === "scissor" && computerChoice === "paper") {
//       return `Draw!`;
//     }
//   }

//   for (i = 0; i < 6; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     console.log(playRound(humanSelection, computerSelection));
//   }

//   if (humanScore > computerScore) {
//     return `You win ${humanScore} to ${computerScore}`;
//   } else if (humanScore < computerScore) {
//     return `You lose ${humanScore} to ${computerScore}`;
//   } else {
//     return ` Draw  ${humanScore} to ${computerScore}`;
//   }
// }

// console.log(playGame());
