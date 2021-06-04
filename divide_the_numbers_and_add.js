function splitAndAdd(digits){
    //ここから書きましょう
    if(0 <= digits && digits < 10) {
        return digits;
    }

    return digits % 10 + splitAndAdd(Math.floor(digits / 10));
}
