function buildMaxHeap(intArr){
    //ここから書きましょう
    let mid = parent(intArr.length);
    for(let i = mid; i >= 0; i--) {
        maxHeapify(intArr, i);
    }
    return intArr;
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
