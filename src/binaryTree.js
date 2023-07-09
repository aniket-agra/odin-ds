import { createTreeNode } from "./treeNode";

function createTree(rootNode = null) {
    let root = rootNode;

    const append = function (value) {
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
        return inOrder(treeRoot.getLeft()) + " " + treeRoot.getValue() + " " + inOrder(treeRoot.getRight());
    }

    return {append, getRoot, inOrder};
}

export{createTree};