function buildMinHeap(intArr){
    //ここから書きましょう
    let mid = parent(intArr.length);
    for(let i = mid; i >= 0; i--) {
        minHeapify(intArr, i);
    }
    return intArr;
}

function parent(i) {
    return Math.floor((i-1)/2);
}

function minHeapify(arr, i) {
    let left = 2*i+1;
    let right = 2*i+2;

    let smallest = i;
    if(arr[left] < arr[smallest]) smallest = left;
    if(arr[right] < arr[smallest]) smallest = right;

    if(smallest !== i) {
        let tmp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = tmp;
        minHeapify(arr, smallest);
    }
}
