const rpcMatrix = [
    [1, 0, 2],
    [2, 1, 0],
    [0, 2, 1]
];

function rpcResult(user, computer) {
    let result = getResultfromNumber(rpcMatrix[user][computer]);
    return result;
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