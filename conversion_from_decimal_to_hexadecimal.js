function decimalToHexadecimal(decNumber){
    //ここから書きましょう
    let hexadecimal = "";
    while(true) {
        let mod = decNumber % 16;
        switch(mod) {
            case 10:
                hexadecimal = 'A' + hexadecimal;
                break;
            case 11:
                hexadecimal = 'B' + hexadecimal;
                break;
            case 12:
                hexadecimal = 'C' + hexadecimal;
                break;
            case 13:
                hexadecimal = 'D' + hexadecimal;
                break;
            case 14:
                hexadecimal = 'E' + hexadecimal;
                break;
            case 15:
                hexadecimal = 'F' + hexadecimal;
                break;
            default:
                hexadecimal = mod.toString() + hexadecimal;
        }
        decNumber = Math.floor(decNumber / 16);
        if(decNumber == 0) break;
    }
    return hexadecimal;
}
