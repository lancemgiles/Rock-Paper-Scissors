function getPlayerChoice() {
	return prompt("Rock, paper, or scissors?").toLowerCase();
}

let computerImg = document.querySelector("#computerImg");

function getComputerChoice() {
	const choice = ['rock', 'paper', 'scissors'];
	const random = Math.floor(Math.random() * choice.length);
	let result = choice[random];
	if (result == choice[0]) {
		computerImg.src = rockImg;
	} else if (result == choice[1]) {
		computerImg.src = paperImg;
	} else if (result == choice[2]) {
		computerImg.src = scissorsImg;
	}
	return result;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		return "Draw!";
	} else if (playerSelection == "rock" && computerSelection == 'scissors') {
		return "Player wins! Rock beats scissors.";
	} else if (playerSelection == "paper" && computerSelection == "rock") {
		return "Player wins! Paper beats rock.";
	} else if (playerSelection == "scissors" && computerSelection == "paper") {
		return "Player wins! Scissors beats paper.";
	} else {
		return "Computer wins";
	}
}

function playGame() {
	for (let i = 0; i < 5; i++) {
		console.log(playRound(getPlayerChoice(), getComputerChoice()));
	}
}

const rock = document.querySelector("#rock");
const rockImg = "./images/rock.png";
const paper = document.querySelector("#paper");
const paperImg = "./images/paper.png";
const scissors = document.querySelector("#scissors");
const scissorsImg = "./images/paper.png";
let outcome = document.querySelector(".result");

// let choice = document.querySelectorAll('.choice');
// let playerChoice;
// choice.forEach(selection => selection.addEventListener("click", () => {
// 	if (this == rock) {
// 		playerChoice = rock;
// 	} else if (this == paper) {
// 		playerChoice = paper;
// 	} else if (this == scissors) {
// 		playerChoice = scissors;
// 	}
// 	playRound(playerChoice, getComputerChoice());
	
// }));

function showResult(result) {

}
rock.addEventListener("click", () => {
	let result = playRound("rock", getComputerChoice());
	console.log(result);
	outcome.textContent = result;
});

