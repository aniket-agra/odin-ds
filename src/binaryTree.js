import { createTreeNode } from "./treeNode";

function createTree(rootNode = null) {
    let root = rootNode;

    const insert = function (value) {
        if (root === null) {
            root = createTreeNode(value);
        } else {
            let current = root;
            while (true) {
                if (value < current.getValue()) {
                    if (current.getLeft() !== null)
                        current = current.getLeft();
                    else {
                        current.setLeft(createTreeNode(value));
                        break;
                    }
                } else {
                    if (current.getRight() !== null)
                        current = current.getRight();
                    else {
                        current.setRight(createTreeNode(value));
                        break;
                    }
                }
            }
        }
    }

    const getRoot = function () {
        return root;
    }

    const inOrder = function (treeRoot) {
        if (treeRoot === null) {
            return "";
        }
        return inOrder(treeRoot.getLeft()) + "_" + treeRoot.getValue() + "_" + inOrder(treeRoot.getRight());
    }

    const preOrder = function (treeRoot) {
        if (treeRoot === null) {
            return "";
        }
        return treeRoot.getValue() + "_" + preOrder(treeRoot.getLeft()) + "_" + preOrder(treeRoot.getRight());
    }

    const postOrder = function (treeRoot) {
        if (treeRoot === null) {
            return "";
        }
        return postOrder(treeRoot.getLeft()) + "_" + postOrder(treeRoot.getRight()) + "_" + treeRoot.getValue();
    }   

    const levelOrder = function (treeRoot) {
        if (treeRoot === null) {
            return "";
        } else {
            let result = "";
            let prevNodes = [treeRoot], currNodes = [];
            while(prevNodes.length > 0) {
                for (let i = 0; i < prevNodes.length; i++) {
                    result = result + prevNodes[i].getValue() + " ";
                    if (prevNodes[i].getLeft() !== null) 
                        currNodes.push(prevNodes[i].getLeft());
                    if (prevNodes[i].getRight() !== null) 
                        currNodes.push(prevNodes[i].getRight());
                }
                prevNodes = currNodes;
                currNodes = [];
                result = result + "\n";
            }
            return result;
        }
    }

    const levelOrderRecursive = function (nodeArr) {
        if (nodeArr.length === 0) 
            return;
        let printArray = [];
        let newArray = [];
        for(let i = 0; i < nodeArr.length; i++) {
            let element = nodeArr[i];
            printArray.push(element.getValue());
            if (element.getLeft() !== null)
                newArray.push(element.getLeft());
            if (element.getRight() !== null)
                newArray.push(element.getRight());
        };
        console.log(printArray);
        levelOrderRecursive(newArray);
    }

    const remove = function(value) {
        let prev = null, current = root;
        while (true) {
            if (current !== null) {
                let currentValue = current.getValue();
                if (value < currentValue) {
                    prev = current;
                    current = current.getLeft();
                } 
                else if (value > current.getRight()) {
                        prev = current;
                        current = current.getRight();
                    } 
                else 
                    break;
            } 
            else 
                break;
        }
        if (current === null) 
            return new Error("cannot remove non-existent element!");
        let leftChild = current.getLeft(), rightChild = current.getRight();
        if (leftChild === null) {
            prev.getLeft() === current ? prev.setLeft(rightChild) : prev.setRight(rightChild);
            return;
        }
        if (rightChild === null) {
            prev.getLeft() === current ? prev.setLeft(leftChild) : prev.setRight(leftChild);
            return;
        }
        let currNode = leftChild.getRight();
        while (true) {
            if (currNode === null)  {
                leftChild.setRight(rightChild);
                break;
            }
            currNode = currNode.getRight();
        }
        if (prev.getLeft() === current) {
            prev.setLeft(leftChild);
        } 
        else {
            prev.setRight(leftChild);
        }
    }

    return {insert, getRoot, inOrder, preOrder, postOrder, levelOrder, levelOrderRecursive, remove};
}

export{createTree};