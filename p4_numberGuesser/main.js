let chances = 10
let previousGuesses = []
const previousGuessesElement = document.querySelector(".guesses")
const chancesElement = document.querySelector(".lastResult")
const submitGuessButtton = document.querySelector("#subt")
const lowOrHi = document.querySelector(".lowOrHi")


let randomNumber = Math.floor(Math.random() * 100) + 1

function correctGuess() {
    document.body.innerHTML = ""
    let display = document.createElement("h1")
    display.textContent = "You Guessed it !!!"
    display.style = "color: 'white'; font-family = 'monospace';text-align: center; margin-top: 200px;font-size: 50px;"
    document.body.appendChild(display);
}
function guessSubmitted() {
    let guessField = document.querySelector("#guessField")
    let guess = parseInt(guessField.value)

    if (guess > 100 || guess < 1) {
        lowOrHi.textContent = "Enter a guess in range of 1-100";
    }
    else if (!isNaN(guess) && chances > 0) {
        if (guess != randomNumber) {
            let msg = randomNumber > guess ? 'Guess Higher' : 'Guess lower';
            previousGuesses.push(guess)
            chances--

            previousGuessesElement.textContent = previousGuesses.join()
            chancesElement.textContent = chances

            lowOrHi.textContent = msg;
            if (chances == 0) { //so that submit and input filled are immediately disabled when chances ==0. if this if block code was not written then we would be giving 11chances. 
                guessField.setAttribute('disabled', '')
                submitGuessButtton.setAttribute("disabled", "")
                lowOrHi.innerHTML = "You're out of chances.You lose :( <br>Reload to play again!";
            }

        }
        else {
            correctGuess()
        }
    }

    else if (isNaN(guess)) {
        lowOrHi.textContent = "Enter a valid number";
    }
    guessField.value = ""

}

submitGuessButtton.addEventListener("click", guessSubmitted)

