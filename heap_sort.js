function heapsort(intArr){
    //ここから書きましょう
    intArr = buildMaxHeap(intArr);
    let heapEnd = intArr.length-1;
    let results = [];

    while(heapEnd >= 0) {
        let tmp = intArr[heapEnd];
        intArr[heapEnd] = intArr[0];
        intArr[0] = tmp;
        heapEnd--;
        results.unshift(intArr.pop());
        maxHeapify(intArr, 0);
    }
    return results;
}

function buildMaxHeap(arr){
    let mid = parent(arr.length);
    for(let i = mid; i >= 0; i--) {
        maxHeapify(arr, i);
    }
    return arr;
}

function parent(i) {
    return Math.floor((i-1)/2);
}

function maxHeapify(arr, i) {
    let left = 2*i+1;
    let right = 2*i+2;

    let biggest = i;
    if(arr[left] > arr[biggest]) biggest = left;
    if(arr[right] > arr[biggest]) biggest = right;

    if(biggest !== i) {
        let tmp = arr[i];
        arr[i] = arr[biggest];
        arr[biggest] = tmp;
        maxHeapify(arr, biggest);
    }
}
