import { createList } from "./linkedList";
import { createTree } from "./binaryTree";


let newList = createList();
newList.append(1);
newList.append(2);
newList.append(3);
newList.append(4);
newList.append(5);
console.log(newList.toString());
newList.insertAt(2, 6);
console.log(newList.toString());
newList.insertAt(0, 7);
console.log(newList.toString());
newList.insertAt(2, 8);
console.log(newList.toString());
// let newTree = createTree();
// console.log(newTree.inOrder(newTree.getRoot()));
// newTree.append("F");
// console.log(newTree.inOrder(newTree.getRoot()));
// newTree.append("D");
// console.log(newTree.inOrder(newTree.getRoot()));
// newTree.append("J");
// newTree.append("B");
// newTree.append("E");
// newTree.append("G");
// newTree.append("K");
// newTree.append("A");
// newTree.append("C");
// newTree.append("I");
// newTree.append("H");
// console.log(newTree.breadthTraverse(newTree.getRoot()));
// // console.log(newTree.inOrder(newTree.getRoot()));
// // console.log(newTree.preOrder(newTree.getRoot()));
// // console.log(newTree.postOrder(newTree.getRoot()));