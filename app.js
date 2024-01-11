let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let uScore = document.querySelector("#user-score");
let compScore = document.querySelector("#computer-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};

const draw = () => {
  msg.innerText = "Game was Draw!";
  msg.style.backgroundColor = "purple";
};

const winner = (userWin, userChoice, computerChoice) => {
  if (userWin === true) {
    let output = `You Win! Your ${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`;
    msg.innerText = output;
    msg.style.backgroundColor = "green";
    userScore++;
    uScore.innerText = userScore;
  } else {
    let output = `You Loose! Computer's ${computerChoice.toUpperCase()} beats your ${userChoice.toUpperCase()}.`;
    msg.innerText = output;
    msg.style.backgroundColor = "red";
    computerScore++;
    compScore.innerText = computerScore;
  }
};

const game = (userChoice) => {
  const computerChoice = genCompChoice();

  if (userChoice === computerChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "scissors" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }

    winner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    game(userChoice);
  });
});
