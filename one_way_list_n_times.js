class SinglyLinkedListNode{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reproduceByN(head,n){
    //ここから書きましょう
    let iter = head;
    let cache = [];
    for(let i = 0; i < getLinkedListNodeSize(head); i++) {
        cache[i] = iter.data;
        iter = iter.next;
    }

    let newHead;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < getLinkedListNodeSize(head); j++) {
            if(i == 0 && j == 0) {
                newHead = new SinglyLinkedListNode(cache[0]);
                iter = newHead;
            } else {
                iter.next = new SinglyLinkedListNode(cache[j]);
                iter = iter.next;
            }
        }
    }
    return newHead;
}

function getLinkedListNodeSize(head) {
    let iter = head;
    let count = 0;
    while(iter !== null) {
        iter = iter.next;
        count++;
    }
    return count;
}
