function compareNumbers(guess, actual) {
    if(guess > actual) {
        return 1;
    }
    else if(guess < actual) {
        return -1;
    }
    else { return 0; }
}

export default compareNumbers;