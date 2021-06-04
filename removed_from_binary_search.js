class BinaryTree{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function bstDelete(root,key){
    //ここから書きましょう
    if(root === null) return null;
    if(!exists(root, key)) return root;

    let node = findNode(root, key);
    parent = findParent(root, node);
    if(node.left === null) root = transplant(root, parent, node, node.right);
    else if(node.right === null) root = transplant(root, parent, node, node.left);
    else {
        let successor = findSuccessor(root, node.data);
        let sp = findParent(root, successor);

        if(successor != node.right) {
            transplant(root, sp, successor, successor.right);
            successor.right = node.right;
        }

        root = transplant(root, parent, node, successor);
        successor.left = node.left;
    }
    return root;
}

function exists(root, key) {
    let iter = root;
    while(iter !== null) {
        if(iter.data === key) return true;
        else if(iter.data > key) iter = iter.left;
        else iter = iter.right;
    }
    return false;
}

function findNode(root, key) {
    let iter = root;
    while(iter !== null) {
        if(iter.data === key) return iter;
        else if(iter.data > key) iter = iter.left;
        else iter = iter.right;
    }
    return null;
}

function findParent(root, node) {
    if(root === node) return null;
    let iter = root;
    while(iter !== null) {
        if(iter.left === node || iter.right === node) return iter;
        else if(iter.data > node.data) iter = iter.left;
        else if(iter.data < node.data) iter = iter.right;
    }
    return iter;
}

function transplant(root, nodeParent, node, target) {
    if(nodeParent === null) root = target;
    else if(nodeParent.left === node) nodeParent.left = target;
    else nodeParent.right = target;
    return root;
}

function findSuccessor(root, key) {
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
