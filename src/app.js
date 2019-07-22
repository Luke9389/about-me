import isYes from './is-yes.js';

const scoreMessage = document.getElementById('quiz-result');
const quizButton = document.getElementById('quiz-button');
const numberScore = document.getElementById('numberScore');

let score = 0;

quizButton.onclick = function() {

    const userName = prompt('State your name.');
    if(userName === '') {
        alert('You cannot leave a prompt blank! Shame on you!');
        return;
    }

    const userHomeland = prompt('From where do you hail ' + userName + ' ?');
    if(userHomeland === '') {
        alert('You cannot leave a prompt blank! Shame on you!');
        return;
    }

    const confirmQuiz = confirm('Ok ' + userName + ' from ' + userHomeland + ', are you sure you\'d like to take this harrowing quiz?');
    if(!confirmQuiz) {
        return;
    }

    const birthPlace = prompt('Is it true that I was born in Austin, TX?');

    if(isYes(birthPlace) === true) {
        score += 1;
    }
    else if(isYes(birthPlace) === 'empty') {
        alert('You cannot leave a prompt blank! Shame on you!');
        return;
    }
    else if(isYes(birthPlace) === 'error') {
        alert('You must respond using yes, y, no, n [not case sensitive]');
        return;
    }

    const food = prompt('Is it true that I dispise sushi?');
    if(!isYes(food)) {
        score += 1;
    }
    else if(isYes(food) === 'empty') {
        alert('You cannot leave a prompt blank! Shame on you!');
        return;
    }
    else if(isYes(food) === 'error') {
        alert('You must respond using yes, y, no, n [not case sensitive]');
        return;
    }

    const cat = prompt('Is it true that my girlfriend has a cat named Mochi?');
    if(isYes(cat) === true) {
        score += 1;
    }
    else if(isYes(cat) === 'empty') {
        alert('You cannot leave a prompt blank! Shame on you!');
        return;
    }
    else if(isYes(cat) === 'error') {
        alert('You must respond using yes, y, no, n [not case sensitive]');
        return;
    }

    alert('Thanks for playing! Your results will now be shown at the bottom of the page.');

    clearScore();

    displayScore(userName, userHomeland, score);
};

function clearScore() {
    numberScore.classList.remove('red');
    numberScore.classList.remove('orange');
    numberScore.classList.remove('yellow');
    numberScore.classList.remove('green');
    numberScore.classList.remove('hidden');
}

function displayScore(userName, userHomeland, score) {
    numberScore.textContent = score + '/3 = ' + Math.floor((score * 100) / 3) + '%';

    setScoreColor();

    scoreMessage.textContent = 'Ok ' + userName + ' of ' + userHomeland +
        ', your score is...';
}

function setScoreColor() {
    if(score === 0) {
        numberScore.classList.add('red');
    }
    else if(score === 1) {
        numberScore.classList.add('orange');
    }
    else if(score === 2) {
        numberScore.classList.add('yellow');
    }
    else { numberScore.classList.add('green'); }
}
