let playerChoice = "rock";

function getComputerChoice() {
	const choice = ['rock', 'paper', 'scissors'];
	const random = Math.floor(Math.random() * choice.length);
	return choice[random];
}

function playRound(playerSelection, computerSelection) {
	let player = playerSelection.toLowerCase();
	if (player == computerSelection) {
		return "Draw!";
	} else if (player == "rock" && computerSelection == 'scissors') {
		return "Player wins! Rock beats scissors.";
	} else if (player == "paper" && computerSelection == "rock") {
		return "Player wins! Paper beats rock.";
	} else if (player == "scissors" && computerSelection == "paper") {
		return "Player wins! Scissors beats paper.";
	} else {
		return "Computer wins";
	}
}

function playGame() {
	for (let i = 0; i < 5; i++) {
		console.log(playRound(playerChoice, getComputerChoice()));
	}
}

playGame();