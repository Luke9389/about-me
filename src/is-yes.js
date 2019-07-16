function isYes(text) {
    if(text.toLowerCase() === 'yes') {
        return true;
    }
    else if(text.toLowerCase() === 'y') {
        return true;
    }
    else if(text === '') {
        return 'error';
    }
    else { return false; }
}

export default isYes;