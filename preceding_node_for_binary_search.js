class BinaryTree{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function predecessor(root,key){
    //ここから書きましょう
    let iter = root;
    let smallerList = [];
    while(iter !== null) {
        if(iter.data >= key) iter = iter.left;
        else {
            smallerList.push(iter);
            iter = iter.right;
        }
    }
    
    if(smallerList.length === 0) return null;
    let maxNode = smallerList[0];
    for(let i = 1; i < smallerList.length; i++) {
        if(smallerList[i].data > maxNode.data) maxNode = smallerList[i];
    }
    return maxNode;
}
