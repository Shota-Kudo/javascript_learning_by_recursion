class SinglyLinkedListNode{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function getLinkedListSize(head) {
    let iter = head;
    let count = 0;
    while(iter !== null) {
        count++;
        iter = iter.next;
    }
    return count;
}

function getLinkedList(head, position) {
    let iter = head;
    for(let i = 0; i < position; i++) {
        iter = iter.next;
    }
    return iter;
}

function findMergeNode(headA,headB){
    //ここから書きましょう
    let lengthA = getLinkedListSize(headA);
    let lengthB = getLinkedListSize(headB);

    headA = (lengthA >= lengthB) ? getLinkedList(headA, lengthA - lengthB) : headA;
    headB = (lengthB >= lengthA) ? getLinkedList(headB, lengthB - lengthA) : headB;

    let iterA = headA;
    let iterB = headB;
    let mergeNode = null;
    while(iterA !== null) {
        if(iterA.data !== iterB.data) mergeNode = null;
        else if(iterA.data === iterB.data && mergeNode === null) mergeNode = iterA;
        iterA = iterA.next;
        iterB = iterB.next;
    }
    if(mergeNode === null) return -1;
    return mergeNode.data;
}
