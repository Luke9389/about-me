import isYes from './is-yes.js';

//Referencing DOM elements
const scoreMessage = document.getElementById('quiz-result');
const quizButton = document.getElementById('quiz-button');

quizButton.onclick = function() {
    //Asking user for their name
    const userName = prompt('State your name.');

    //Asking user where they are from
    const userHomeland = prompt('From where do you hail ' + userName + ' ?');

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
        score += 1;
    }

    //Question Two
    const food = prompt('Is it true that I dispise sushi?');
    if(!isYes(food)) {
        score += 1;
    }

    //Question Three
    const cat = prompt('Is it true that my girlfriend has a cat named Mochi?');
    if(isYes(cat)) {
        score += 1;
    }

    scoreMessage.textContent = 'Ok ' + userName + ' of ' + userHomeland +
        ', your score is ' + score + '/3.';
};