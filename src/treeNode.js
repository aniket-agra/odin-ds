function createTreeNode(val = null, left = null, right = null) {
    let value = val;
    let leftNode = left;
    let rightNode = right;

    const setValue = function (nodeValue) {
        value = nodeValue;
    } 
    
    const getValue = function () {
        return value;
    }

    const setLeft = function (treeNode) {
        leftNode = treeNode;
    }

    const getLeft = function () {
        return leftNode;
    }

    const setRight = function (treeNode) {
        rightNode = treeNode;
    }

    const getRight = function () {
        return rightNode;
    }

    return {getValue, setValue, getLeft, setLeft, getRight, setRight};
}