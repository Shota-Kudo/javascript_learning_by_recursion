function twosComplement(bits){
    //ここから書きましょう
    /* bits = parseInt(bits, 10);
    console.log(bits); */
    bits_list = [];
    for(i=0; i<bits.length; i++) {
        if(bits[i] == '0') {
            bits_list.push('1');
        } else if(bits[i] == '1') {
            bits_list.push('0');
        }
    }

    for(i=bits_list.length-1; i>=0; i--) {
        if(bits_list[i] == '0') {
            bits_list[i] = '1';
            break;
        } else if(bits_list[i] == '1') {
            bits_list[i] = '0';
            if(i==0) {
                bits_list.unshift('1');
            }
        }
        //console.log(i);
    }
    return bits_list.join('');
}
