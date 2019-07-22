import getThrow from './get-throw.js';
import changeTC from './changeTC.js';
import rpcResult from './rpc-result.js';

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
const moneyDisplay = document.getElementById('money-display');

let wins = 0;
let losses = 0;
let ties = 0;

throwButton.addEventListener('click', () => {
    let wager = parseInt(document.getElementById('wager').value);
    let money = parseInt(moneyDisplay.textContent);
    if(wager > money) {
        alert('You can\'t bet more than you have');
        return;
    }
    if(isNaN(wager)) {
        wager = 0;
    }

    let userThrow = document.querySelector('input:checked').value;

    let computerThrow = getThrow();
    showComputerThrow(computerThrow);

    updateMessage(computerThrow, userThrow);

    updateTally();

    updateMoney(money, wager);
});

function showComputerThrow(computerThrow) {
    compPaper.classList.remove('chosen');
    compRock.classList.remove('chosen');
    compScissors.classList.remove('chosen');

    if(computerThrow === 'scissors') {
        compScissors.classList.add('chosen');
    } else if(computerThrow === 'paper') {
        compPaper.classList.add('chosen');
    } else if(computerThrow === 'rock') {
        compRock.classList.add('chosen');
    }
}

function updateMessage(computerThrow, userThrow) {
    messageCC.textContent = computerThrow;
    messageUC.textContent = userThrow;
    winLose.textContent = rpcResult(userThrow, computerThrow);
}

function updateMoney(money, wager) {
    if(winLose.textContent === 'lose') {
        money = money - wager;
        changeTC(moneyDisplay, money);
    } else if(winLose.textContent === 'win') {
        money = money + wager;
        changeTC(moneyDisplay, money); 
    }
}

function updateTally() {
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
}