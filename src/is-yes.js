function isYes(text) {
    if(text.toLowerCase() === 'yes') {
        return true;
    }
    else if(text.toLowerCase() === 'y') {
        return true;
    }
    else if(text.toLowerCase() === 'no') {
        return false;
    }
    else if(text.toLowerCase() === 'n') {
        return false;
    }
    else if(text === '') {
        return 'empty';
    }
    else { return 'error'; }
}

export default isYes;