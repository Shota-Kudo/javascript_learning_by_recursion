function middleSubstring(stringInput){
    //ここから書きましょう
    let re_str_len = Math.floor(stringInput.length/2);
    //console.log(re_str_len);
    let del_front_len = Math.ceil(re_str_len/2);
    if(stringInput.length<=2) {
        return stringInput[0];
    } else {
        return stringInput.substring(del_front_len, del_front_len + re_str_len);
    }
}
