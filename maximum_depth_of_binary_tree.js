class BinaryTree{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function maximumDepth(root){
    //ここから書きましょう
    let depth = 1;
    return maximumDepthHelper(root, depth);
}

function maximumDepthHelper(root, depth) {
    let leftDepth = depth;
    let rightDepth = depth;
    if(root.left !== null) leftDepth = maximumDepthHelper(root.left, depth+1);
    if(root.right !== null) rightDepth = maximumDepthHelper(root.right, depth+1);

    return leftDepth >= rightDepth ? leftDepth : rightDepth;
}
