function getPlayerChoice() {
	return prompt("Rock, paper, or scissors?").toLowerCase();
}

function getComputerChoice() {
	const choice = ['rock', 'paper', 'scissors'];
	const random = Math.floor(Math.random() * choice.length);
	return choice[random];
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

playGame();