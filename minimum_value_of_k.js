function minKElements(intArr,k){
    //ここから書きましょう
    buildMaxHeap(intArr);
    let heapEnd = intArr.length-1;
    let results = [];

    while(heapEnd >= 0) {
        let tmp = intArr[heapEnd];
        intArr[heapEnd] = intArr[0];
        intArr[0] = tmp;
        heapEnd--;
        results.push(intArr.pop());
        if(results.length >= k) break;
        maxHeapify(intArr, 0);
    }
    return results;
}

function buildMaxHeap(arr){
    let mid = parent(arr.length);
    for(let i = mid; i >= 0; i--) {
        maxHeapify(arr, i);
    }
}

function parent(i) {
    return Math.floor((i-1)/2);
}

function maxHeapify(arr, i) {
    let left = 2*i+1;
    let right = 2*i+2;

    let smallest = i;
    if(arr[left] < arr[smallest]) smallest = left;
    if(arr[right] < arr[smallest]) smallest = right;

    if(smallest !== i) {
        let tmp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = tmp;
        maxHeapify(arr, smallest);
    }
}
