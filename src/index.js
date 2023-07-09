import { createList } from "./linkedList";
import { createTree } from "./binaryTree";

let newTree = createTree();
console.log(newTree.inOrder(newTree.getRoot()));
newTree.append(2);
console.log(newTree.inOrder(newTree.getRoot()));
newTree.append(1);
console.log(newTree.inOrder(newTree.getRoot()));
newTree.append(3);
console.log(newTree.inOrder(newTree.getRoot()));