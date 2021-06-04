function stockSpan(stocks){
    //ここから書きましょう
    let stack = [];
    let results =[];

    for(let i = 0; i < stocks.length; i++) {
        let current = stocks[i];
        let counter = 1;

        while(stack.length > 0 && stocks[stack[stack.length-1]] < current) counter += results[stack.pop()];

        results.push(counter);
        stack.push(i);
    }

    return results;
}
