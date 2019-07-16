function compareNumbers(guess, actual) {
    if(guess === actual) {
        return 0;
    }
    else if(guess > actual) {
        return 1;
    }
    else { return -1; }
}

export default compareNumbers;