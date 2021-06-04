function recursiveDigitsAdded(digits){
    //ここから書きましょう
    if(digits < 10) {
        return digits;
    }
    return recursiveDigitsAddedHelper(digits, 0);
}

function recursiveDigitsAddedHelper(digits, total) {
    if(digits < 10) {
        return total;
    }
    digits = splitAndAdd(digits, 0);
    return recursiveDigitsAddedHelper(digits, total + digits);
}

function splitAndAdd(digits, total) {
    if(digits < 10) {
        return total + digits;
    }
    return splitAndAdd(Math.floor(digits / 10), total + digits % 10);
}
