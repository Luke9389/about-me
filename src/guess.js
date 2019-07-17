import compareNumbers from './compare-numbers.js';

const button = document.getElementById('submit-guess');
const numberGuess = document.getElementById('number-guess');
const trialMessage = document.getElementById('high-low-right');
const triesDisplay = document.getElementById('numberTries');
const gameResult = document.getElementById('win-lose-result');

const numberAnswer = Math.floor((Math.random() * 20) + 1);
//console.log('Actual Answer: ' + numberAnswer);

let tries = triesDisplay.textContent;

button.addEventListener('click', () => {

    let guess = numberGuess.value;

    tries -= 1;
    triesDisplay.textContent = tries;

    if(tries === 0) {
        gameResult.textContent = 'Ran out of tries!';
        button.disabled = true;
        gameResult.textContent = 'You Lose...';
    }
    let resultTrial = compareNumbers(guess, numberAnswer);

    switch(resultTrial) {
        case -1:
            trialMessage.textContent = 'too low :(';
            break;

        case 1:
            trialMessage.textContent = 'too high :(';
            break;

        default:
            trialMessage.textContent = 'dead on!';
            button.disabled = true;
            gameResult.textContent = 'You Win!';
            break;
    }

});