function minWindowArrK(intArr,k){
    //ここから書きましょう
    let min;
    let results = [];
    for(let i = 0; i < intArr.length-k+1; i++) {
        let currentList = [];
        for(let j = i; j < i+k; j++) {
            currentList.push(intArr[j]);
        }
        results.push(getMinFromList(currentList));
    }
    return results;
}

function getMinFromList(list) {
    let min = list[0];
    for(let i = 1; i < list.length; i++) {
        if(list[i] < min) min = list[i];
    }
    return min;
}
