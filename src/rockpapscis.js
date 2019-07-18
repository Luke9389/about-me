import getThrow from './get-throw.js';
import changeTC from './changeTC.js';

//DOM
const throwButton = document.getElementById('throw-button');
const messageUC = document.getElementById('message-uc');
const messageCC = document.getElementById('message-cc');
const winLose = document.getElementById('win-lose');
const winTally = document.getElementById('win-tally');
const lossTally = document.getElementById('loss-tally');
const tieTally = document.getElementById('tie-tally');
const compRock = document.getElementById('comp-rock');
const compPaper = document.getElementById('comp-paper');
const compScissors = document.getElementById('comp-scissors');

let wins = 0;
let losses = 0;
let ties = 0;


throwButton.addEventListener('click', () => {
    //clear blue border
    compPaper.classList.remove('chosen');
    compRock.classList.remove('chosen');
    compScissors.classList.remove('chosen');
    
    //collect user throw
    const userChoice = document.querySelector('input:checked');

    let userThrow = userChoice.value;
    messageUC.textContent = userThrow;

    //generate computer throw
    let computerThrow = getThrow();
    messageCC.textContent = computerThrow;
    if(computerThrow === 'scissors') {
        compScissors.classList.add('chosen');
    } else if(computerThrow === 'paper') {
        compPaper.classList.add('chosen');
    } else if(computerThrow === 'rock') {
        compRock.classList.add('chosen');
    }

    //find result and change record
    if(userThrow === computerThrow) {
        winLose.textContent = 'tied';
    } else if(userThrow === 'rock') {
        if(computerThrow === 'paper') {
            winLose.textContent = 'lose';
        } else { winLose.textContent = 'win'; }
    } else if(userThrow === 'paper') {
        if(computerThrow === 'scissors') {
            winLose.textContent = 'lose';
        } else { winLose.textContent = 'win'; }
    } else if(userThrow === 'scissors') {
        if(computerThrow === 'rock') {
            winLose.textContent = 'lose';
        } else { winLose.textContent = 'win'; }
    }
    if(winLose.textContent === 'tied') {
        ties += 1;
        changeTC(tieTally, ties);
    } else if(winLose.textContent === 'lose') {
        losses += 1;
        changeTC(lossTally, losses);
    } else if(winLose.textContent === 'win') {
        wins += 1;
        changeTC(winTally, wins);
    }


});

