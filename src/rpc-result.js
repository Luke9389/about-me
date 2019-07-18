function rpcResult(userThrow, computerThrow) {
    if(userThrow === computerThrow) {
        return getResultfromNumber(1);
    } else if(userThrow === 'rock') {
        if(computerThrow === 'paper') {
            return getResultfromNumber(0);
        } else { return getResultfromNumber(2); }
    } else if(userThrow === 'paper') {
        if(computerThrow === 'scissors') {
            return getResultfromNumber(0);
        } else { return getResultfromNumber(2); }
    } else if(userThrow === 'scissors') {
        if(computerThrow === 'rock') {
            return getResultfromNumber(0);
        } else { return getResultfromNumber(2); }
    }
}

function getResultfromNumber(num) {
    switch(num) {
        case 0:
            return 'lose';
        case 1:
            return 'tied';
        case 2:
            return 'win';
    }
}

export default rpcResult;