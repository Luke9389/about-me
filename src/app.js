import isYes from './is-yes.js';

//Referencing DOM elements
const scoreMessage = document.getElementById('quiz-result');
const quizButton = document.getElementById('quiz-button');
const numberScore = document.getElementById('numberScore');


quizButton.onclick = function() {
    //blank response error message

    //Asking user for their name
    const userName = prompt('State your name.');
    if(userName === '') {
        alert('You cannot leave a prompt blank! Shame on you!');
        return;
    }
    //Asking user where they are from
    const userHomeland = prompt('From where do you hail ' + userName + ' ?');
    if(userHomeland === '') {
        alert('You cannot leave a prompt blank! Shame on you!');
        return;
    }

    //Verifying that user wants to take quiz
    const confirmQuiz = confirm('Ok ' + userName + ' from ' + userHomeland + ', are you sure you\'d like to take this harrowing quiz?');
    if(!confirmQuiz) {
        return;
    }

    //Making Score Counter Variable
    let score = 0;


    //Question One

    const birthPlace = prompt('Is it true that I was born in Austin, TX?');

    if(isYes(birthPlace)) {
        if(isYes(birthPlace) === 'empty') {
            alert('You cannot leave a prompt blank! Shame on you!');
            return;
        }
        else if(isYes(birthPlace) === 'error') {
            alert('You must respond using yes, y, no, n [not case sensitive]');
            return;
        }
        score += 1;
    }

    //Question Two
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

    //Question Three
    const cat = prompt('Is it true that my girlfriend has a cat named Mochi?');
    if(isYes(cat)) {
        if(isYes(cat) === 'empty') {
            alert('You cannot leave a prompt blank! Shame on you!');
            return;
        }
        else if(isYes(cat) === 'error') {
            alert('You must respond using yes, y, no, n [not case sensitive]');
            return;
        }
        score += 1;
    }

    //#region
    //REACH GOAL: COLOR CODE SCORE

    //unhide score box and clear last color
    numberScore.classList.remove('zero');
    numberScore.classList.remove('one');
    numberScore.classList.remove('two');
    numberScore.classList.remove('three');
    numberScore.classList.remove('hidden');

    //Make score fraction & percentage
    numberScore.textContent = score + '/3 = ' + Math.floor((score * 100) / 3) + '%';

    //Change style of quiz-result class
    if(score === 0) {
        numberScore.classList.add('zero');
    }
    else if(score === 1) {
        numberScore.classList.add('one');
    }
    else if(score === 2) {
        numberScore.classList.add('two');
    }
    else { numberScore.classList.add('three'); }
    //#endregion

    //Spit out message for final score
    scoreMessage.textContent = 'Ok ' + userName + ' of ' + userHomeland +
        ', your score is...';


};