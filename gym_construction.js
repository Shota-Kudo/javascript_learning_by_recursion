function largestRectangle(h){
    //ここから書きましょう
    let results = [];
    for(let i = 0; i < h.length; i++) {
        j = i-1;
        total = 1;
        let current = h[i];
        while(j >=0 && current <= h[j]) {
            total++;
            j--;
        }
        j = i+1;
        while(j <= h.length && current <= h[j]) {
            total++;
            j++;
        }
        results.push(total*h[i]);
    }
    return results.reduce((a, b) => Math.max(a, b));
}
