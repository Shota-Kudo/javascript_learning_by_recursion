function winnerPairOfCards(player1,player2){
    //ここから書きましょう
    let player1Cache = pairCount(player1);
    let player2Cache = pairCount(player2);

    for(let j = 0; j < player1.length; j++) {
        let maxValue1 = 0;
        let maxIndex1 = 0;
        for(let i = 0; i < player1Cache.length; i++) {
            if(player1Cache[i] === undefined) continue;
            else if(player1Cache[i] >= maxValue1) {
                maxValue1 = player1Cache[i];
                maxIndex1 = i;
            }
        }

        let maxValue2 = 0;
        let maxIndex2 = 0;
        for(let i = 0; i < player2Cache.length; i++) {
            if(player2Cache[i] === undefined) continue;
            else if(player2Cache[i] >= maxValue2) {
                maxValue2 = player2Cache[i];
                maxIndex2 = i;
            }
        }

        if(maxValue1 > maxValue2) return "player1";
        else if(maxValue1 == maxValue2) {
            if(maxIndex1 > maxIndex2) return "player1";
            else if(maxIndex1 == maxIndex2) {
                player1Cache[maxIndex1] = undefined;
                player2Cache[maxIndex2] = undefined;
                if(j == player1.length - 1) return "draw";
                else continue;
            }
            else return "player2";
        } else return "player2"; 
    }
}

function pairCount(cards) {
    let cache = [];
    let intValueList = cardValue(cards);
    for(let i = 0; i < intValueList.length; i++) {
        if(cache[intValueList[i]] === undefined) cache[intValueList[i]] = 1;
        else cache[intValueList[i]]++;
    }
    return cache;
}

function cardValue(cards) {
    let intValue = [];
    const cardSymbol = {"A": 14, "J": 11, "Q": 12, "K":13};
    for(let i = 0; i < cards.length; i++) {
        let card = cards[i].substring(1);
        intValue.push(card in cardSymbol ? cardSymbol[card] : parseInt(card));
    }
    return intValue;
}
