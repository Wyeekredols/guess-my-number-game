'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
let gameround = 0;
let gamewon = 0;
let gamelost = 0;

document.querySelector('.check').addEventListener('click', function () { 
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No guess';
    document.querySelector('.check').re
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Guess Correct';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = score;
    
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    gameRound();
    gameWon();
  } else if (guess !== secretNumber) {
    if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too low!';
        gameMsg();
      } else {
        gameRound();
        gameMessage();
        gameLost();
      }
    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too High!';
        gameMsg();
      } else {
        gameRound();
        gameMessage();
        gameLost();
      }
    }
    
  } 
  
});

let gameRound = function () {
  gameround++;
  document.querySelector('.gameround').textContent = gameround;
}

let gameWon = function () {
  gamewon++;
  document.querySelector('.gamewon').textContent = gamewon;
  document.querySelector('.check').disabled = true;
};

let gameLost = function () {
  gamelost++;
  document.querySelector('.gamelost').textContent = gamelost;
  document.querySelector('.check').disabled = true;
}

let gameEmpty = function () {
  document.querySelector('.check').disabled = true;
}

let gameMsg = function () {
  score--;
  document.querySelector('.score').textContent = score;
}

let gameMessage = function () {
  document.querySelector('.message').textContent =
    'Oops! You lost';
  document.querySelector('.score').textContent = 0;
}

document.querySelector('.again').addEventListener('click', function () { 
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent =
    'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
});


document.querySelector('.reset').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
  document.querySelector('.gameround').textContent = 0;
  document.querySelector('.gamewon').textContent = 0;
  document.querySelector('.gamelost').textContent = 0;
  document.querySelector('.highscore').textContent = 0;
});
