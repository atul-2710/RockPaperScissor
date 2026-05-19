let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.getElementById("msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

function genCompChoice() {
  const options = ["rock", "paper", "scissors"]
  return options[Math.floor(Math.random() * 3)]
}

const drawGame = () => {
  msg.innerText = "Game was Draw! Play again."
  msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++
    userScorePara.innerText = userScore
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "green"
  } else {
    compScore++
    compScorePara.innerText = compScore
    msg.innerText = `You Lose.${compChoice} beats Your ${userChoice}`
    msg.style.backgroundColor = "red"
  }
}

const playGame = (userChoice) => {
  console.log("user choice =", userChoice)
  const compChoice = genCompChoice()
  console.log("comp choice =", compChoice)

  if (userChoice === compChoice) {
    drawGame()
  } else {
    let userWin = true
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true
    } else {
      userWin = compChoice === "rock" ? false : true
    }
    showWinner(userWin, userChoice, compChoice)
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id")
    playGame(userChoice)
  })
})
