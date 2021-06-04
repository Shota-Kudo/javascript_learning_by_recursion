function firstNonRepeating(string){
    //ここから書きましょう
    let hashMapQuestionCount = {};
    for(let i = 0; i < string.length; i++) {
        let question = string[i];
        if(hashMapQuestionCount[question] === undefined) hashMapQuestionCount[question] = i;
        else hashMapQuestionCount[question] = "Not once";
    }

    let keyQuestions = Object.keys(hashMapQuestionCount);
    let first = -1;
    for(let i = 0; i < keyQuestions.length; i++) {
        if(hashMapQuestionCount[keyQuestions[i]] == "Not once") continue;
        else {
            first = hashMapQuestionCount[keyQuestions[i]];
            break;
        }
    }
    return first;
}
