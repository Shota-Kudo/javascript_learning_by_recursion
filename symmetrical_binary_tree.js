class BinaryTree{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function symmetricTree(root){
    //ここから書きましょう
    if(root === null) return true;

    let leftSideList = searchLeftSide(root.left, []);
    let rightSideList = searchRightSide(root.right, []);

    for(let i = 0; i < leftSideList.length; i++) {
        if(leftSideList[i] !== rightSideList[i]) return false;
    }
    return true;
}

function searchLeftSide(root, leftSideList) {
    if(root.left !== null) searchLeftSide(root.left, leftSideList);
    else if(root.left === null) leftSideList.push(1);
    leftSideList.push(root.data);
    if(root.right !== null) searchLeftSide(root.right, leftSideList);
    else if(root.right === null) leftSideList.push(-1);

    return leftSideList;
}

function searchRightSide(root, rightSideList) {
    if(root.right !== null) searchRightSide(root.right, rightSideList);
    else if(root.right === null) rightSideList.push(1);
    rightSideList.push(root.data);
    if(root.left !== null) searchRightSide(root.left, rightSideList);
    else if(root.left === null) rightSideList.push(-1);

    return rightSideList;
}
