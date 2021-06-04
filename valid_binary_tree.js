class BinaryTree{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function validateBST(root){
    //ここから書きましょう
    if(root === null) return true;
    if(root.left === null && root.right === null) return true;
    else if(root.left === null){
        if(root.data < root.right) return validateBST(root.right);
        else return false;
    }
    else if(root.right === null){
        if(root.data > root.left) return validateBST(root.left);
        else return false;
    }
    else if(root.data > root.left.data && root.data < root.right.data) {
        return validateBST(root.left) && validateBST(root.right);
    }
    else return false;
}
