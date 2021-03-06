// Rock Paper Scissors Game
// Generate random number for computer option
// Take random number assign choice and display in selection box
// Compare Player choice vs computer choice determine win, loss or draw
// Based on outcome win, lose add to score, with draw do nothing
// Keep total score best 2 out of 3
// Repeat until there is a winner, first one that wins 2
// Give option to play again
let playerScore = 0;
let computerScore = 0;


function rockPaperScissors() {
    randNumber();
    checkOptions();
    checkScore();
}

function randNumber() {
    let num = Math.floor(Math.random() * 3) + 1;
    console.log(num);
    computerOption(num);
}

function computerOption(num) {
    if (num == 1) {
        document.getElementById('computer').value = 'rock';
    } else if (num == 2) {
        document.getElementById('computer').value = 'paper';
    } else {
        document.getElementById('computer').value = 'scissors';
    }
}

function checkOptions() {
    let player = document.getElementById('player').value;
    let computer = document.getElementById('computer').value;
    if (player === computer) {
        document.getElementById('result').innerHTML = 'Draw!';
        document.getElementById('buttonDone').style.display = 'block';
    } else if (player == 'rock' && computer == 'paper') {
        document.getElementById('result').innerHTML = 'Paper covers Rock! Computer wins';
        // document.getElementById('buttonDone').style.display = 'block';
        computerScore++
        document.getElementById('score').innerHTML = 'Player: ' + playerScore + '  Computer: ' + computerScore;
    } else if (player == 'rock' && computer == 'scissors') {
        document.getElementById('result').innerHTML = 'Rock smashes Scissors! Player wins';
        // document.getElementById('buttonDone').style.display = 'block';
        playerScore++
        document.getElementById('score').innerHTML = 'Player: ' + playerScore + '  Computer: ' + computerScore;
        checkScore();
    } else if (player == 'paper' && computer == 'rock') {
        document.getElementById('result').innerHTML = 'Paper covers Rock! Player wins';
        // document.getElementById('buttonDone').style.display = 'block';
        playerScore++
        document.getElementById('score').innerHTML = 'Player: ' + playerScore + '  Computer: ' + computerScore;
        checkScore();
    } else if (player == 'paper' && computer == 'scissors') {
        document.getElementById('result').innerHTML = 'Scissors cuts Paper! Computer wins';
        // document.getElementById('buttonDone').style.display = 'block';
        computerScore++
        document.getElementById('score').innerHTML = 'Player: ' + playerScore + '  Computer: ' + computerScore;
        checkScore();
    } else if (player == 'scissors' && computer == 'rock') {
        document.getElementById('result').innerHTML = 'Rock smashes Scissors! Computer wins';
        // document.getElementById('buttonDone').style.display = 'block';
        computerScore++
        document.getElementById('score').innerHTML = 'Player: ' + playerScore + '  Computer: ' + computerScore;
        checkScore();
    } else if (player == 'scissors' && computer == 'paper') {
        document.getElementById('result').innerHTML = 'Scissors cuts Paper! Player wins';
        // document.getElementById('buttonDone').style.display = 'block';
        playerScore++
        document.getElementById('score').innerHTML = 'Player: ' + playerScore + '  Computer: ' + computerScore;
        checkScore();
    }
}

function resetBoard() {
    document.getElementById('result').innerHTML = "";
    document.getElementById('buttonDone').style.display = 'none';
    document.getElementById('player').value = 'none';
    document.getElementById('computer').value = 'none';

}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('play_again').style.display = 'none';
    document.getElementById('gameover').innerHTML = "";
    document.getElementById('score').innerHTML = "";
}

function goodbye() {
    document.getElementById('gameover').innerHTML = "Thanks for playing. Have a great day!";
}

function checkScore() {
    let playAgain = document.getElementById('play_again');
    let doneButton = document.getElementById('buttonDone');
    let gameover = document.getElementById('gameover');

    if (playerScore == 2) {
        // Gameover Player wins
        gameover.innerHTML = 'Game Over Player Wins!';
        playAgain.style.display = 'block';

    } else if (computerScore == 2) {
        // Gameover Computer wins
        gameover.innerHTML = 'Game Over Computer Wins!';
        playAgain.style.display = 'block';

    } else if (playerScore < 2 && computerScore < 2) {
        doneButton.style.display = 'block';
    }

}