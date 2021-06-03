function winnerPairOfCards(player1,player2){ 
    //ここから書きましょう 
    //return pairCount(player1); 
    let pairPlayer1 = pairCount(player1); 
    let pairPlayer2 = pairCount(player2); 
    let maxValue = 0; 
    let maxIndex = 0; 
    for(let i = 0; i < pairPlayer1.length; i++) { 
        if(pairPlayer1[i] === undefined) continue; 
        else if(pairPlayer1[i] > maxValue) { 
            maxValue = pairPlayer1[i]; 
            maxIndex = i; 
        } 
    } 
    let maxValue2 = 0; 
    let maxIndex2 = 0; 
    for(let i = 0; i < pairPlayer2.length; i++) { 
        if(pairPlayer2[i] === undefined) continue; 
        else if(pairPlayer2[i] > maxValue) { 
            maxValue = pairPlayer2[i]; 
            maxIndex2 = i; 
        } 
    } 
    if(maxValue > maxValue2) return "player1"; 
    else if(maxValue == maxValue2) { 
        if(maxIndex > maxIndex2) return "player1"; 
        else return "player2"; 
    } else return "player2"; 
} 
//paircache 
function pairCount(cards) { 
    let cache = []; 
    let intValueList = cardValue(cards); 
    for(let i = 0; i < intValueList.length; i++) { 
        if(cache[intValueList[i]] === undefined) cache[intValueList[i]] = 1; 
        else cache[intValueList[i]]++; 
    } 
    return cache; 
} 
//数値変換 
function cardValue(cards) { 
    let intValue = []; 
    const cardSymbol = {"A": 14, "J": 11, "Q": 12, "K":13}; 
    for(let i = 0; i < cards.length; i++) { 
        let card = cards[i][1]; 
        intValue.push(card in cardSymbol ? cardSymbol[card] : parseInt(card)); 
    } 
    return intValue; 
}
