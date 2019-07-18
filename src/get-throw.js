
export default function getThrow() {
    //Gen random number
    let randomNumber = Math.random() * 3;

    //call getThrowFromNumber
    const toss = getThrowFromNumber(randomNumber);
    //spit out result
    return toss;
}

export function getThrowFromNumber(num) {

    if(num < 1) {
        return 'rock';
    } else if(num < 2) {
        return 'paper';
    } else { return 'scissors'; }


}

