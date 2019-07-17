import compareNumbers from './compare-numbers.js';
import changeTC from './changeTC.js';


//Reference DOM elements
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
    changeTC(triesDisplay, tries);

    if(tries === 0) {
        changeTC(gameResult, 'Ran out of tries!');
        button.disabled = true;

    }
    let resultTrial = compareNumbers(guess, numberAnswer);

    switch(resultTrial) {
        case -1:
            changeTC(trialMessage, 'too low :(');
            break;

        case 1:
            changeTC(trialMessage, 'too high :(');
            break;

        default:
            changeTC(trialMessage, 'dead on!');
            button.disabled = true;
            changeTC(gameResult, 'You Win!');
            break;
    }

});



