function hasSameType(user1,user2){
    //ここから書きましょう
    let user1Pattern = searchPattern(user1);
    let user2Pattern = searchPattern(user2);
    if(user1Pattern.length < user2Pattern.length) {
        let tmp = user1Pattern;
        user1Pattern = user2Pattern;
        user2Pattern = tmp;
    }
    for(let i = 0; i < user1Pattern.length; i++) {
        if(user1Pattern[i] != user2Pattern[i]) return false;
    }
    return true;
}

function searchPattern(string) {
    let hashMap = {};
    let sequence = [];
    let sequenceFlag = 0;
    for(let i = 0; i < string.length; i++) {
        if(i > 0) {
            if(string[i] != string[i-1]) {
                sequenceFlag = 0;
                sequence.push(hashMap[string[i - 1]]);
            } else sequenceFlag = 1;
        }
        if(hashMap[string[i]] === undefined) {
            hashMap[string[i]] = 1;
        } else if(hashMap[string[i]] > 0) {
            if(sequenceFlag == 0) hashMap[string[i]] = 0;
            hashMap[string[i]]++;
            if(i == string.length - 1) sequence.push(hashMap[string[i]]);
        }
    }
    return sequence;
}
