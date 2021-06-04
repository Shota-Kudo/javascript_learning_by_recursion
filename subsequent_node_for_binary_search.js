class BinaryTree{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function successor(root,key){
    //ここから書きましょう
    let iter = root;
    let largerList = [];
    while(iter != null) {
        if(iter.data > key) {
            largerList.push(iter);
            iter = iter.left;
        }
        else iter = iter.right;
    }

    if(largerList.length == 0) return null;
    let minNode = largerList[0];
    for(let i = 1; i < largerList.length; i++) {
        if(largerList[i].data < minNode.data) minNode = largerList[i];
    }
    return minNode;
}
