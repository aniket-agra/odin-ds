/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/binaryTree.js":
/*!***************************!*\
  !*** ./src/binaryTree.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTree: () => (/* binding */ createTree)
/* harmony export */ });
/* harmony import */ var _treeNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treeNode */ "./src/treeNode.js");


function createTree(rootNode = null) {
    let root = rootNode;

    const insert = function (value) {
        if (root === null) {
            root = (0,_treeNode__WEBPACK_IMPORTED_MODULE_0__.createTreeNode)(value);
        } else {
            let current = root;
            while (true) {
                if (value < current.getValue()) {
                    if (current.getLeft() !== null)
                        current = current.getLeft();
                    else {
                        current.setLeft((0,_treeNode__WEBPACK_IMPORTED_MODULE_0__.createTreeNode)(value));
                        break;
                    }
                } else {
                    if (current.getRight() !== null)
                        current = current.getRight();
                    else {
                        current.setRight((0,_treeNode__WEBPACK_IMPORTED_MODULE_0__.createTreeNode)(value));
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
                else 
                if (value > currentValue) {
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
        let prevNode = leftChild, currNode = prevNode.getRight();
        while (true) {
            if (currNode === null)  {
                prevNode.setRight(rightChild);
                break;
            }
            prevNode = currNode;
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



/***/ }),

/***/ "./src/linkedList.js":
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createList: () => (/* binding */ createList)
/* harmony export */ });
/* harmony import */ var _listNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listNode */ "./src/listNode.js");


function createList() {
    let head = null;
    let tail = head;
    let listSize = 0;

    const append = function (value) {
        let newNode = (0,_listNode__WEBPACK_IMPORTED_MODULE_0__.createNode)(value);
        if (head === null) {
            head = newNode;
            tail = head;
        } else {
            tail.setNext(newNode);
            tail = newNode;
        }
        listSize += 1;
    }

    const prepend = function (value) {
        let newNode = (0,_listNode__WEBPACK_IMPORTED_MODULE_0__.createNode)(value, head);
        head = newNode;
        listSize += 1;
    }

    const getSize = function () {
        return listSize;
    }

    const getHead = function () {
        return head;
    }

    const getTail = function () {
        return tail;
    }

    const elementAt = function (indx) {
        let element = head;
        for (let i = 1; i <= indx; i++) {
            element = element.getNext();
        }
        return element.getValue();
    }

    const pop = function () {
        let result;
        if (tail === head) {
            result = tail;
            tail = null;
            head = null;
        } else {
            let element = head;
            while (true) {
                if (element.getNext() === tail) {
                    break;
                } else {
                    element = element.getNext();
                }
            }
            result = tail;
            tail = element;
            tail.setNext(null);
        }
        listSize -= 1;
        return result.getValue();
    }

    const insertAt = function (indx, value) {
        if (indx === 0) {
            prepend(value);
        } else if (indx < listSize) {
            let leftNode = head, counter = 1;
            while (counter < indx) {
                leftNode = head.getNext();
                counter += 1;
            }
            let newNode = (0,_listNode__WEBPACK_IMPORTED_MODULE_0__.createNode)(value);
            newNode.setNext(leftNode.getNext());
            leftNode.setNext(newNode);
            listSize += 1;
        } else {
            console.log("Sorry, index is greater than list size!");
        }
    }

    const remove = function (indx) {
        if (indx === 0) {
            head = head.getNext();
            listSize -= 1;
        } else if (indx < listSize) {
            let leftNode = head, counter = 1;
            while (counter < indx) {
                leftNode = leftNode.getNext();
                counter += 1;
            }
            let toBeRemoved = leftNode.getNext();
            leftNode.setNext(toBeRemoved.getNext());
            listSize -= 1;
        } else {
            console.log("Sorry, index out of bounds!");
        }
    }

    const toString = function () {
        let repr = "";
        let element = head; 
        while (true) {
            if (element === null) {
                repr += "null";
                break;
            } 
            repr += element.getValue() + " -> ";
            element = element.getNext();
        }
        return repr;
    }

    return {append, prepend, getSize, getHead, getTail, elementAt, pop, insertAt, remove, toString};
}



/***/ }),

/***/ "./src/listNode.js":
/*!*************************!*\
  !*** ./src/listNode.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNode: () => (/* binding */ createNode)
/* harmony export */ });
function createNode(val = null, next = null) {
    let value = val;
    let nextNode = next;
    
    const setValue = function (val) {
        value = val;
    }

    const getValue = function () {
        return value;
    }

    const setNext = function (node) {
        nextNode = node;
    }

    const getNext = function () {
        return nextNode;
    }

    return {getValue, setValue, getNext, setNext};
}



/***/ }),

/***/ "./src/treeNode.js":
/*!*************************!*\
  !*** ./src/treeNode.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTreeNode: () => (/* binding */ createTreeNode)
/* harmony export */ });
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

    const toString = function () {
        let result = value + " " + leftNode.getValue() + " (L) " + rightNode.getValue() + " (R) ";
        return result;
    }

    return {getValue, setValue, getLeft, setLeft, getRight, setRight};
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList */ "./src/linkedList.js");
/* harmony import */ var _binaryTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binaryTree */ "./src/binaryTree.js");




// let newList = createList();
// newList.append(1);
// newList.append(2);
// newList.append(3);
// newList.append(4);
// newList.append(5);
// console.log(newList.toString());
// newList.insertAt(2, 6);
// console.log(newList.toString());
// newList.insertAt(0, 7);
// console.log(newList.toString());
// newList.insertAt(2, 8);
// console.log(newList.toString());
// newList.remove(0);
// console.log(newList.toString());
// newList.remove(2);
// console.log(newList.toString());
// newList.remove(5);
// console.log(newList.toString());
let newTree = (0,_binaryTree__WEBPACK_IMPORTED_MODULE_1__.createTree)();
newTree.insert("F");
newTree.insert("D");
newTree.insert("J");
newTree.insert("B");
newTree.insert("E");
newTree.insert("G");
newTree.insert("K");
newTree.insert("A");
newTree.insert("C");
newTree.insert("I");
newTree.insert("H");
console.log(newTree.levelOrder(newTree.getRoot()));
newTree.remove("J");
console.log(newTree.levelOrder(newTree.getRoot()));
// console.log(newTree.inOrder(newTree.getRoot()));
// console.log(newTree.preOrder(newTree.getRoot()));
// console.log(newTree.postOrder(newTree.getRoot()));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQix5REFBYztBQUNqQyxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHlEQUFjO0FBQ3REO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHlEQUFjO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0l3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IscURBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IscURBQVU7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsV0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscURBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7O1VDbkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ0E7OztBQUcxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdURBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tZHMvLi9zcmMvYmluYXJ5VHJlZS5qcyIsIndlYnBhY2s6Ly9vZGluLWRzLy4vc3JjL2xpbmtlZExpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy8uL3NyYy9saXN0Tm9kZS5qcyIsIndlYnBhY2s6Ly9vZGluLWRzLy4vc3JjL3RyZWVOb2RlLmpzIiwid2VicGFjazovL29kaW4tZHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWRzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRyZWVOb2RlIH0gZnJvbSBcIi4vdHJlZU5vZGVcIjtcblxuZnVuY3Rpb24gY3JlYXRlVHJlZShyb290Tm9kZSA9IG51bGwpIHtcbiAgICBsZXQgcm9vdCA9IHJvb3ROb2RlO1xuXG4gICAgY29uc3QgaW5zZXJ0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgICAgICAgICByb290ID0gY3JlYXRlVHJlZU5vZGUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSByb290O1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPCBjdXJyZW50LmdldFZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuZ2V0TGVmdCgpICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuZ2V0TGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuc2V0TGVmdChjcmVhdGVUcmVlTm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5nZXRSaWdodCgpICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuZ2V0UmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50LnNldFJpZ2h0KGNyZWF0ZVRyZWVOb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cblxuICAgIGNvbnN0IGluT3JkZXIgPSBmdW5jdGlvbiAodHJlZVJvb3QpIHtcbiAgICAgICAgaWYgKHRyZWVSb290ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5PcmRlcih0cmVlUm9vdC5nZXRMZWZ0KCkpICsgXCJfXCIgKyB0cmVlUm9vdC5nZXRWYWx1ZSgpICsgXCJfXCIgKyBpbk9yZGVyKHRyZWVSb290LmdldFJpZ2h0KCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHByZU9yZGVyID0gZnVuY3Rpb24gKHRyZWVSb290KSB7XG4gICAgICAgIGlmICh0cmVlUm9vdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyZWVSb290LmdldFZhbHVlKCkgKyBcIl9cIiArIHByZU9yZGVyKHRyZWVSb290LmdldExlZnQoKSkgKyBcIl9cIiArIHByZU9yZGVyKHRyZWVSb290LmdldFJpZ2h0KCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvc3RPcmRlciA9IGZ1bmN0aW9uICh0cmVlUm9vdCkge1xuICAgICAgICBpZiAodHJlZVJvb3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3N0T3JkZXIodHJlZVJvb3QuZ2V0TGVmdCgpKSArIFwiX1wiICsgcG9zdE9yZGVyKHRyZWVSb290LmdldFJpZ2h0KCkpICsgXCJfXCIgKyB0cmVlUm9vdC5nZXRWYWx1ZSgpO1xuICAgIH0gICBcblxuICAgIGNvbnN0IGxldmVsT3JkZXIgPSBmdW5jdGlvbiAodHJlZVJvb3QpIHtcbiAgICAgICAgaWYgKHRyZWVSb290ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IHByZXZOb2RlcyA9IFt0cmVlUm9vdF0sIGN1cnJOb2RlcyA9IFtdO1xuICAgICAgICAgICAgd2hpbGUocHJldk5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXZOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmV2Tm9kZXNbaV0uZ2V0VmFsdWUoKSArIFwiIFwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJldk5vZGVzW2ldLmdldExlZnQoKSAhPT0gbnVsbCkgXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyTm9kZXMucHVzaChwcmV2Tm9kZXNbaV0uZ2V0TGVmdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZOb2Rlc1tpXS5nZXRSaWdodCgpICE9PSBudWxsKSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJOb2Rlcy5wdXNoKHByZXZOb2Rlc1tpXS5nZXRSaWdodCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldk5vZGVzID0gY3Vyck5vZGVzO1xuICAgICAgICAgICAgICAgIGN1cnJOb2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIFwiXFxuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbGV2ZWxPcmRlclJlY3Vyc2l2ZSA9IGZ1bmN0aW9uIChub2RlQXJyKSB7XG4gICAgICAgIGlmIChub2RlQXJyLmxlbmd0aCA9PT0gMCkgXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBwcmludEFycmF5ID0gW107XG4gICAgICAgIGxldCBuZXdBcnJheSA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbm9kZUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBub2RlQXJyW2ldO1xuICAgICAgICAgICAgcHJpbnRBcnJheS5wdXNoKGVsZW1lbnQuZ2V0VmFsdWUoKSk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5nZXRMZWZ0KCkgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChlbGVtZW50LmdldExlZnQoKSk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5nZXRSaWdodCgpICE9PSBudWxsKVxuICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goZWxlbWVudC5nZXRSaWdodCgpKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2cocHJpbnRBcnJheSk7XG4gICAgICAgIGxldmVsT3JkZXJSZWN1cnNpdmUobmV3QXJyYXkpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGxldCBwcmV2ID0gbnVsbCwgY3VycmVudCA9IHJvb3Q7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VmFsdWUgPSBjdXJyZW50LmdldFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIDwgY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXYgPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5nZXRMZWZ0KCk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5nZXRSaWdodCgpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudCA9PT0gbnVsbCkgXG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiY2Fubm90IHJlbW92ZSBub24tZXhpc3RlbnQgZWxlbWVudCFcIik7XG4gICAgICAgIGxldCBsZWZ0Q2hpbGQgPSBjdXJyZW50LmdldExlZnQoKSwgcmlnaHRDaGlsZCA9IGN1cnJlbnQuZ2V0UmlnaHQoKTtcbiAgICAgICAgaWYgKGxlZnRDaGlsZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcHJldi5nZXRMZWZ0KCkgPT09IGN1cnJlbnQgPyBwcmV2LnNldExlZnQocmlnaHRDaGlsZCkgOiBwcmV2LnNldFJpZ2h0KHJpZ2h0Q2hpbGQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodENoaWxkID09PSBudWxsKSB7XG4gICAgICAgICAgICBwcmV2LmdldExlZnQoKSA9PT0gY3VycmVudCA/IHByZXYuc2V0TGVmdChsZWZ0Q2hpbGQpIDogcHJldi5zZXRSaWdodChsZWZ0Q2hpbGQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcmV2Tm9kZSA9IGxlZnRDaGlsZCwgY3Vyck5vZGUgPSBwcmV2Tm9kZS5nZXRSaWdodCgpO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGN1cnJOb2RlID09PSBudWxsKSAge1xuICAgICAgICAgICAgICAgIHByZXZOb2RlLnNldFJpZ2h0KHJpZ2h0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldk5vZGUgPSBjdXJyTm9kZTtcbiAgICAgICAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUuZ2V0UmlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldi5nZXRMZWZ0KCkgPT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHByZXYuc2V0TGVmdChsZWZ0Q2hpbGQpO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByZXYuc2V0UmlnaHQobGVmdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7aW5zZXJ0LCBnZXRSb290LCBpbk9yZGVyLCBwcmVPcmRlciwgcG9zdE9yZGVyLCBsZXZlbE9yZGVyLCBsZXZlbE9yZGVyUmVjdXJzaXZlLCByZW1vdmV9O1xufVxuXG5leHBvcnR7Y3JlYXRlVHJlZX07IiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuL2xpc3ROb2RlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QoKSB7XG4gICAgbGV0IGhlYWQgPSBudWxsO1xuICAgIGxldCB0YWlsID0gaGVhZDtcbiAgICBsZXQgbGlzdFNpemUgPSAwO1xuXG4gICAgY29uc3QgYXBwZW5kID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGxldCBuZXdOb2RlID0gY3JlYXRlTm9kZSh2YWx1ZSk7XG4gICAgICAgIGlmIChoZWFkID09PSBudWxsKSB7XG4gICAgICAgICAgICBoZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIHRhaWwgPSBoZWFkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFpbC5zZXROZXh0KG5ld05vZGUpO1xuICAgICAgICAgICAgdGFpbCA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdFNpemUgKz0gMTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmVwZW5kID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGxldCBuZXdOb2RlID0gY3JlYXRlTm9kZSh2YWx1ZSwgaGVhZCk7XG4gICAgICAgIGhlYWQgPSBuZXdOb2RlO1xuICAgICAgICBsaXN0U2l6ZSArPSAxO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsaXN0U2l6ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRIZWFkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaGVhZDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYWlsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGFpbDtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50QXQgPSBmdW5jdGlvbiAoaW5keCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGhlYWQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGluZHg7IGkrKykge1xuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQuZ2V0TmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldFZhbHVlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAodGFpbCA9PT0gaGVhZCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGFpbDtcbiAgICAgICAgICAgIHRhaWwgPSBudWxsO1xuICAgICAgICAgICAgaGVhZCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGhlYWQ7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmdldE5leHQoKSA9PT0gdGFpbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5nZXROZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ID0gdGFpbDtcbiAgICAgICAgICAgIHRhaWwgPSBlbGVtZW50O1xuICAgICAgICAgICAgdGFpbC5zZXROZXh0KG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RTaXplIC09IDE7XG4gICAgICAgIHJldHVybiByZXN1bHQuZ2V0VmFsdWUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnNlcnRBdCA9IGZ1bmN0aW9uIChpbmR4LCB2YWx1ZSkge1xuICAgICAgICBpZiAoaW5keCA9PT0gMCkge1xuICAgICAgICAgICAgcHJlcGVuZCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5keCA8IGxpc3RTaXplKSB7XG4gICAgICAgICAgICBsZXQgbGVmdE5vZGUgPSBoZWFkLCBjb3VudGVyID0gMTtcbiAgICAgICAgICAgIHdoaWxlIChjb3VudGVyIDwgaW5keCkge1xuICAgICAgICAgICAgICAgIGxlZnROb2RlID0gaGVhZC5nZXROZXh0KCk7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5ld05vZGUgPSBjcmVhdGVOb2RlKHZhbHVlKTtcbiAgICAgICAgICAgIG5ld05vZGUuc2V0TmV4dChsZWZ0Tm9kZS5nZXROZXh0KCkpO1xuICAgICAgICAgICAgbGVmdE5vZGUuc2V0TmV4dChuZXdOb2RlKTtcbiAgICAgICAgICAgIGxpc3RTaXplICs9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNvcnJ5LCBpbmRleCBpcyBncmVhdGVyIHRoYW4gbGlzdCBzaXplIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZSA9IGZ1bmN0aW9uIChpbmR4KSB7XG4gICAgICAgIGlmIChpbmR4ID09PSAwKSB7XG4gICAgICAgICAgICBoZWFkID0gaGVhZC5nZXROZXh0KCk7XG4gICAgICAgICAgICBsaXN0U2l6ZSAtPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGluZHggPCBsaXN0U2l6ZSkge1xuICAgICAgICAgICAgbGV0IGxlZnROb2RlID0gaGVhZCwgY291bnRlciA9IDE7XG4gICAgICAgICAgICB3aGlsZSAoY291bnRlciA8IGluZHgpIHtcbiAgICAgICAgICAgICAgICBsZWZ0Tm9kZSA9IGxlZnROb2RlLmdldE5leHQoKTtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdG9CZVJlbW92ZWQgPSBsZWZ0Tm9kZS5nZXROZXh0KCk7XG4gICAgICAgICAgICBsZWZ0Tm9kZS5zZXROZXh0KHRvQmVSZW1vdmVkLmdldE5leHQoKSk7XG4gICAgICAgICAgICBsaXN0U2l6ZSAtPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb3JyeSwgaW5kZXggb3V0IG9mIGJvdW5kcyFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHJlcHIgPSBcIlwiO1xuICAgICAgICBsZXQgZWxlbWVudCA9IGhlYWQ7IFxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXByICs9IFwibnVsbFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHJlcHIgKz0gZWxlbWVudC5nZXRWYWx1ZSgpICsgXCIgLT4gXCI7XG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5nZXROZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcHI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHthcHBlbmQsIHByZXBlbmQsIGdldFNpemUsIGdldEhlYWQsIGdldFRhaWwsIGVsZW1lbnRBdCwgcG9wLCBpbnNlcnRBdCwgcmVtb3ZlLCB0b1N0cmluZ307XG59XG5cbmV4cG9ydCB7Y3JlYXRlTGlzdH07IiwiZnVuY3Rpb24gY3JlYXRlTm9kZSh2YWwgPSBudWxsLCBuZXh0ID0gbnVsbCkge1xuICAgIGxldCB2YWx1ZSA9IHZhbDtcbiAgICBsZXQgbmV4dE5vZGUgPSBuZXh0O1xuICAgIFxuICAgIGNvbnN0IHNldFZhbHVlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICB2YWx1ZSA9IHZhbDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldE5leHQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBuZXh0Tm9kZSA9IG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5leHROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0VmFsdWUsIHNldFZhbHVlLCBnZXROZXh0LCBzZXROZXh0fTtcbn1cblxuZXhwb3J0IHtjcmVhdGVOb2RlfTsiLCJmdW5jdGlvbiBjcmVhdGVUcmVlTm9kZSh2YWwgPSBudWxsLCBsZWZ0ID0gbnVsbCwgcmlnaHQgPSBudWxsKSB7XG4gICAgbGV0IHZhbHVlID0gdmFsO1xuICAgIGxldCBsZWZ0Tm9kZSA9IGxlZnQ7XG4gICAgbGV0IHJpZ2h0Tm9kZSA9IHJpZ2h0O1xuXG4gICAgY29uc3Qgc2V0VmFsdWUgPSBmdW5jdGlvbiAobm9kZVZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gbm9kZVZhbHVlO1xuICAgIH0gXG4gICAgXG4gICAgY29uc3QgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRMZWZ0ID0gZnVuY3Rpb24gKHRyZWVOb2RlKSB7XG4gICAgICAgIGxlZnROb2RlID0gdHJlZU5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGVmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGxlZnROb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFJpZ2h0ID0gZnVuY3Rpb24gKHRyZWVOb2RlKSB7XG4gICAgICAgIHJpZ2h0Tm9kZSA9IHRyZWVOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFJpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmlnaHROb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IHRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdmFsdWUgKyBcIiBcIiArIGxlZnROb2RlLmdldFZhbHVlKCkgKyBcIiAoTCkgXCIgKyByaWdodE5vZGUuZ2V0VmFsdWUoKSArIFwiIChSKSBcIjtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFZhbHVlLCBzZXRWYWx1ZSwgZ2V0TGVmdCwgc2V0TGVmdCwgZ2V0UmlnaHQsIHNldFJpZ2h0fTtcbn1cblxuZXhwb3J0IHtjcmVhdGVUcmVlTm9kZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVMaXN0IH0gZnJvbSBcIi4vbGlua2VkTGlzdFwiO1xuaW1wb3J0IHsgY3JlYXRlVHJlZSB9IGZyb20gXCIuL2JpbmFyeVRyZWVcIjtcblxuXG4vLyBsZXQgbmV3TGlzdCA9IGNyZWF0ZUxpc3QoKTtcbi8vIG5ld0xpc3QuYXBwZW5kKDEpO1xuLy8gbmV3TGlzdC5hcHBlbmQoMik7XG4vLyBuZXdMaXN0LmFwcGVuZCgzKTtcbi8vIG5ld0xpc3QuYXBwZW5kKDQpO1xuLy8gbmV3TGlzdC5hcHBlbmQoNSk7XG4vLyBjb25zb2xlLmxvZyhuZXdMaXN0LnRvU3RyaW5nKCkpO1xuLy8gbmV3TGlzdC5pbnNlcnRBdCgyLCA2KTtcbi8vIGNvbnNvbGUubG9nKG5ld0xpc3QudG9TdHJpbmcoKSk7XG4vLyBuZXdMaXN0Lmluc2VydEF0KDAsIDcpO1xuLy8gY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbi8vIG5ld0xpc3QuaW5zZXJ0QXQoMiwgOCk7XG4vLyBjb25zb2xlLmxvZyhuZXdMaXN0LnRvU3RyaW5nKCkpO1xuLy8gbmV3TGlzdC5yZW1vdmUoMCk7XG4vLyBjb25zb2xlLmxvZyhuZXdMaXN0LnRvU3RyaW5nKCkpO1xuLy8gbmV3TGlzdC5yZW1vdmUoMik7XG4vLyBjb25zb2xlLmxvZyhuZXdMaXN0LnRvU3RyaW5nKCkpO1xuLy8gbmV3TGlzdC5yZW1vdmUoNSk7XG4vLyBjb25zb2xlLmxvZyhuZXdMaXN0LnRvU3RyaW5nKCkpO1xubGV0IG5ld1RyZWUgPSBjcmVhdGVUcmVlKCk7XG5uZXdUcmVlLmluc2VydChcIkZcIik7XG5uZXdUcmVlLmluc2VydChcIkRcIik7XG5uZXdUcmVlLmluc2VydChcIkpcIik7XG5uZXdUcmVlLmluc2VydChcIkJcIik7XG5uZXdUcmVlLmluc2VydChcIkVcIik7XG5uZXdUcmVlLmluc2VydChcIkdcIik7XG5uZXdUcmVlLmluc2VydChcIktcIik7XG5uZXdUcmVlLmluc2VydChcIkFcIik7XG5uZXdUcmVlLmluc2VydChcIkNcIik7XG5uZXdUcmVlLmluc2VydChcIklcIik7XG5uZXdUcmVlLmluc2VydChcIkhcIik7XG5jb25zb2xlLmxvZyhuZXdUcmVlLmxldmVsT3JkZXIobmV3VHJlZS5nZXRSb290KCkpKTtcbm5ld1RyZWUucmVtb3ZlKFwiSlwiKTtcbmNvbnNvbGUubG9nKG5ld1RyZWUubGV2ZWxPcmRlcihuZXdUcmVlLmdldFJvb3QoKSkpO1xuLy8gY29uc29sZS5sb2cobmV3VHJlZS5pbk9yZGVyKG5ld1RyZWUuZ2V0Um9vdCgpKSk7XG4vLyBjb25zb2xlLmxvZyhuZXdUcmVlLnByZU9yZGVyKG5ld1RyZWUuZ2V0Um9vdCgpKSk7XG4vLyBjb25zb2xlLmxvZyhuZXdUcmVlLnBvc3RPcmRlcihuZXdUcmVlLmdldFJvb3QoKSkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==