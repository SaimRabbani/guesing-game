let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const gurssSlotes = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevGues = [];
let numGues = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    //console.log(guess)
    validateGues(guess);
  });
}

function validateGues(guess) {
  if (isNaN(guess)) {
    alert("PLease enter the valid number");
  } else if (guess < 1) {
    alert("PLease enter the number more then 1");
  } else if (guess > 100) {
    alert("PLease enter the number less then 100");
  } else {
    prevGues.push(guess);
    if (numGues === 11) {
      displayGuess(guess);
      displayMsg(`Game Over, Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGues(guess);
    }
  }
}

function checkGues(guess) {
  if (guess === randomNum) {
    displayMsg("You Guessed it right");
    endGame();
  } else if (guess < randomNum) {
    displayMsg("Number is TOO low");
  } else if (guess > randomNum) {
    displayMsg("Number is TOO high");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  gurssSlotes.innerHTML += `${guess},`;
  numGues++;
  remaining.innerHTML = `${11 - numGues}`;
}

function displayMsg(message) {
  lowOrHi, (innerHTML = `<h2>${message}</h2>`);
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGamebtn = document.querySelector("#newGame");
  newGamebtn.addEventListener("click", function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGues = [];
    numGues = 1;
    gurssSlotes.innerHTML = "";
    remaining.innerHTML = `${11 - numGues}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
