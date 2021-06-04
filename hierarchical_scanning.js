class BinaryTree{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function levelOrderTraversal(root){
    //ここから書きましょう
    let queue = [root];
    let results = [];
    while(queue[0] !== undefined) {
        let current = queue.shift();

        if(current === null) {
            results.push(null);
            continue;
        }

        results.push(current.data);
        queue.push(current.left);
        queue.push(current.right);
    }

    while(results.length > 0 && results[results.length-1] === null) results.pop();
    return results;
}
