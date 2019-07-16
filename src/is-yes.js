function isYes(text) {
    if(text.toLowerCase() === 'yes') {
        return true;
    }
    else if(text.toLowerCase() === 'y') {
        return true;
    }
    else { return false; }
}

export default isYes;