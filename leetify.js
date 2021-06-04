function leetify(stringInput){
    //ここから書きましょう
    let leetHash = {
        a: "4",
        b: "8",
        e: "3",
        l: "1",
        o: "0",
        s: "5",
        t: "7",
        z: "2",
        A: "4",
        B: "8",
        E: "3",
        L: "1",
        O: "0",
        S: "5",
        T: "7",
        Z: "2"
    };

    for(let i = 0; i < stringInput.length; i++) {
        if(stringInput[i] in leetHash) {
            stringInput = stringInput.replace(new RegExp(stringInput[i], 'g'), leetHash[stringInput[i]]);
        }
    }

    return stringInput;
}
