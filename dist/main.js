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

    const find = function (value) {
        let current = root;
        while (true) {
            if ((current === null) || (current.getValue() === value)) {
                break;
            }
            if (value < current.getValue()) {
                current = current.getLeft();
            } else {
                current = current.getRight();
            }
        }
        return current;
    }

    // const heightNode = function (treeNode) {
    //     if (treeNode === null) {
    //         return Number.MIN_SAFE_INTEGER;
    //     }
    //     if (treeNode.getLeft() === null && treeNode.getRight() === null) {
    //         return 0;
    //     } 
    //     return Math.max(heightNode(treeNode.getLeft()), heightNode(treeNode.getRight())) + 1;
    // }

    // const height = function (value) {
    //     return heightNode(find(value));
    // }

    return {insert, getRoot, inOrder, preOrder, postOrder, levelOrder, levelOrderRecursive, remove, height, find};
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
console.log(newTree.find("J").getRight().getValue());
// console.log(newTree.levelOrder(newTree.getRoot()));
// console.log(newTree.inOrder(newTree.getRoot()));
// console.log(newTree.preOrder(newTree.getRoot()));
// console.log(newTree.postOrder(newTree.getRoot()));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQix5REFBYztBQUNqQyxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHlEQUFjO0FBQ3REO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHlEQUFjO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUt3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IscURBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IscURBQVU7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsV0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscURBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7O1VDbkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ0E7OztBQUcxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdURBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tZHMvLi9zcmMvYmluYXJ5VHJlZS5qcyIsIndlYnBhY2s6Ly9vZGluLWRzLy4vc3JjL2xpbmtlZExpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy8uL3NyYy9saXN0Tm9kZS5qcyIsIndlYnBhY2s6Ly9vZGluLWRzLy4vc3JjL3RyZWVOb2RlLmpzIiwid2VicGFjazovL29kaW4tZHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWRzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRyZWVOb2RlIH0gZnJvbSBcIi4vdHJlZU5vZGVcIjtcblxuZnVuY3Rpb24gY3JlYXRlVHJlZShyb290Tm9kZSA9IG51bGwpIHtcbiAgICBsZXQgcm9vdCA9IHJvb3ROb2RlO1xuXG4gICAgY29uc3QgaW5zZXJ0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgICAgICAgICByb290ID0gY3JlYXRlVHJlZU5vZGUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSByb290O1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPCBjdXJyZW50LmdldFZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuZ2V0TGVmdCgpICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuZ2V0TGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuc2V0TGVmdChjcmVhdGVUcmVlTm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5nZXRSaWdodCgpICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuZ2V0UmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50LnNldFJpZ2h0KGNyZWF0ZVRyZWVOb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cblxuICAgIGNvbnN0IGluT3JkZXIgPSBmdW5jdGlvbiAodHJlZVJvb3QpIHtcbiAgICAgICAgaWYgKHRyZWVSb290ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5PcmRlcih0cmVlUm9vdC5nZXRMZWZ0KCkpICsgXCJfXCIgKyB0cmVlUm9vdC5nZXRWYWx1ZSgpICsgXCJfXCIgKyBpbk9yZGVyKHRyZWVSb290LmdldFJpZ2h0KCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHByZU9yZGVyID0gZnVuY3Rpb24gKHRyZWVSb290KSB7XG4gICAgICAgIGlmICh0cmVlUm9vdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyZWVSb290LmdldFZhbHVlKCkgKyBcIl9cIiArIHByZU9yZGVyKHRyZWVSb290LmdldExlZnQoKSkgKyBcIl9cIiArIHByZU9yZGVyKHRyZWVSb290LmdldFJpZ2h0KCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvc3RPcmRlciA9IGZ1bmN0aW9uICh0cmVlUm9vdCkge1xuICAgICAgICBpZiAodHJlZVJvb3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3N0T3JkZXIodHJlZVJvb3QuZ2V0TGVmdCgpKSArIFwiX1wiICsgcG9zdE9yZGVyKHRyZWVSb290LmdldFJpZ2h0KCkpICsgXCJfXCIgKyB0cmVlUm9vdC5nZXRWYWx1ZSgpO1xuICAgIH0gICBcblxuICAgIGNvbnN0IGxldmVsT3JkZXIgPSBmdW5jdGlvbiAodHJlZVJvb3QpIHtcbiAgICAgICAgaWYgKHRyZWVSb290ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IHByZXZOb2RlcyA9IFt0cmVlUm9vdF0sIGN1cnJOb2RlcyA9IFtdO1xuICAgICAgICAgICAgd2hpbGUocHJldk5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXZOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmV2Tm9kZXNbaV0uZ2V0VmFsdWUoKSArIFwiIFwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJldk5vZGVzW2ldLmdldExlZnQoKSAhPT0gbnVsbCkgXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyTm9kZXMucHVzaChwcmV2Tm9kZXNbaV0uZ2V0TGVmdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZOb2Rlc1tpXS5nZXRSaWdodCgpICE9PSBudWxsKSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJOb2Rlcy5wdXNoKHByZXZOb2Rlc1tpXS5nZXRSaWdodCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldk5vZGVzID0gY3Vyck5vZGVzO1xuICAgICAgICAgICAgICAgIGN1cnJOb2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIFwiXFxuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbGV2ZWxPcmRlclJlY3Vyc2l2ZSA9IGZ1bmN0aW9uIChub2RlQXJyKSB7XG4gICAgICAgIGlmIChub2RlQXJyLmxlbmd0aCA9PT0gMCkgXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBwcmludEFycmF5ID0gW107XG4gICAgICAgIGxldCBuZXdBcnJheSA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbm9kZUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBub2RlQXJyW2ldO1xuICAgICAgICAgICAgcHJpbnRBcnJheS5wdXNoKGVsZW1lbnQuZ2V0VmFsdWUoKSk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5nZXRMZWZ0KCkgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChlbGVtZW50LmdldExlZnQoKSk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5nZXRSaWdodCgpICE9PSBudWxsKVxuICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goZWxlbWVudC5nZXRSaWdodCgpKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2cocHJpbnRBcnJheSk7XG4gICAgICAgIGxldmVsT3JkZXJSZWN1cnNpdmUobmV3QXJyYXkpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGxldCBwcmV2ID0gbnVsbCwgY3VycmVudCA9IHJvb3Q7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VmFsdWUgPSBjdXJyZW50LmdldFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIDwgY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXYgPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5nZXRMZWZ0KCk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5nZXRSaWdodCgpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudCA9PT0gbnVsbCkgXG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiY2Fubm90IHJlbW92ZSBub24tZXhpc3RlbnQgZWxlbWVudCFcIik7XG4gICAgICAgIGxldCBsZWZ0Q2hpbGQgPSBjdXJyZW50LmdldExlZnQoKSwgcmlnaHRDaGlsZCA9IGN1cnJlbnQuZ2V0UmlnaHQoKTtcbiAgICAgICAgaWYgKGxlZnRDaGlsZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcHJldi5nZXRMZWZ0KCkgPT09IGN1cnJlbnQgPyBwcmV2LnNldExlZnQocmlnaHRDaGlsZCkgOiBwcmV2LnNldFJpZ2h0KHJpZ2h0Q2hpbGQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodENoaWxkID09PSBudWxsKSB7XG4gICAgICAgICAgICBwcmV2LmdldExlZnQoKSA9PT0gY3VycmVudCA/IHByZXYuc2V0TGVmdChsZWZ0Q2hpbGQpIDogcHJldi5zZXRSaWdodChsZWZ0Q2hpbGQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcmV2Tm9kZSA9IGxlZnRDaGlsZCwgY3Vyck5vZGUgPSBwcmV2Tm9kZS5nZXRSaWdodCgpO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGN1cnJOb2RlID09PSBudWxsKSAge1xuICAgICAgICAgICAgICAgIHByZXZOb2RlLnNldFJpZ2h0KHJpZ2h0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldk5vZGUgPSBjdXJyTm9kZTtcbiAgICAgICAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUuZ2V0UmlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldi5nZXRMZWZ0KCkgPT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHByZXYuc2V0TGVmdChsZWZ0Q2hpbGQpO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByZXYuc2V0UmlnaHQobGVmdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSByb290O1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKChjdXJyZW50ID09PSBudWxsKSB8fCAoY3VycmVudC5nZXRWYWx1ZSgpID09PSB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IGN1cnJlbnQuZ2V0VmFsdWUoKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmdldExlZnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuZ2V0UmlnaHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9XG5cbiAgICAvLyBjb25zdCBoZWlnaHROb2RlID0gZnVuY3Rpb24gKHRyZWVOb2RlKSB7XG4gICAgLy8gICAgIGlmICh0cmVlTm9kZSA9PT0gbnVsbCkge1xuICAgIC8vICAgICAgICAgcmV0dXJuIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0cmVlTm9kZS5nZXRMZWZ0KCkgPT09IG51bGwgJiYgdHJlZU5vZGUuZ2V0UmlnaHQoKSA9PT0gbnVsbCkge1xuICAgIC8vICAgICAgICAgcmV0dXJuIDA7XG4gICAgLy8gICAgIH0gXG4gICAgLy8gICAgIHJldHVybiBNYXRoLm1heChoZWlnaHROb2RlKHRyZWVOb2RlLmdldExlZnQoKSksIGhlaWdodE5vZGUodHJlZU5vZGUuZ2V0UmlnaHQoKSkpICsgMTtcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCBoZWlnaHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyAgICAgcmV0dXJuIGhlaWdodE5vZGUoZmluZCh2YWx1ZSkpO1xuICAgIC8vIH1cblxuICAgIHJldHVybiB7aW5zZXJ0LCBnZXRSb290LCBpbk9yZGVyLCBwcmVPcmRlciwgcG9zdE9yZGVyLCBsZXZlbE9yZGVyLCBsZXZlbE9yZGVyUmVjdXJzaXZlLCByZW1vdmUsIGhlaWdodCwgZmluZH07XG59XG5cbmV4cG9ydHtjcmVhdGVUcmVlfTsiLCJpbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4vbGlzdE5vZGVcIjtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdCgpIHtcbiAgICBsZXQgaGVhZCA9IG51bGw7XG4gICAgbGV0IHRhaWwgPSBoZWFkO1xuICAgIGxldCBsaXN0U2l6ZSA9IDA7XG5cbiAgICBjb25zdCBhcHBlbmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgbGV0IG5ld05vZGUgPSBjcmVhdGVOb2RlKHZhbHVlKTtcbiAgICAgICAgaWYgKGhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGFpbCA9IGhlYWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWlsLnNldE5leHQobmV3Tm9kZSk7XG4gICAgICAgICAgICB0YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0U2l6ZSArPSAxO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXBlbmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgbGV0IG5ld05vZGUgPSBjcmVhdGVOb2RlKHZhbHVlLCBoZWFkKTtcbiAgICAgICAgaGVhZCA9IG5ld05vZGU7XG4gICAgICAgIGxpc3RTaXplICs9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RTaXplO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEhlYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBoZWFkO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRhaWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0YWlsO1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRBdCA9IGZ1bmN0aW9uIChpbmR4KSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gaGVhZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gaW5keDsgaSsrKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5nZXROZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0VmFsdWUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmICh0YWlsID09PSBoZWFkKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0YWlsO1xuICAgICAgICAgICAgdGFpbCA9IG51bGw7XG4gICAgICAgICAgICBoZWFkID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gaGVhZDtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ2V0TmV4dCgpID09PSB0YWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LmdldE5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgPSB0YWlsO1xuICAgICAgICAgICAgdGFpbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB0YWlsLnNldE5leHQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdFNpemUgLT0gMTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5nZXRWYWx1ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGluc2VydEF0ID0gZnVuY3Rpb24gKGluZHgsIHZhbHVlKSB7XG4gICAgICAgIGlmIChpbmR4ID09PSAwKSB7XG4gICAgICAgICAgICBwcmVwZW5kKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmR4IDwgbGlzdFNpemUpIHtcbiAgICAgICAgICAgIGxldCBsZWZ0Tm9kZSA9IGhlYWQsIGNvdW50ZXIgPSAxO1xuICAgICAgICAgICAgd2hpbGUgKGNvdW50ZXIgPCBpbmR4KSB7XG4gICAgICAgICAgICAgICAgbGVmdE5vZGUgPSBoZWFkLmdldE5leHQoKTtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmV3Tm9kZSA9IGNyZWF0ZU5vZGUodmFsdWUpO1xuICAgICAgICAgICAgbmV3Tm9kZS5zZXROZXh0KGxlZnROb2RlLmdldE5leHQoKSk7XG4gICAgICAgICAgICBsZWZ0Tm9kZS5zZXROZXh0KG5ld05vZGUpO1xuICAgICAgICAgICAgbGlzdFNpemUgKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29ycnksIGluZGV4IGlzIGdyZWF0ZXIgdGhhbiBsaXN0IHNpemUhXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlID0gZnVuY3Rpb24gKGluZHgpIHtcbiAgICAgICAgaWYgKGluZHggPT09IDApIHtcbiAgICAgICAgICAgIGhlYWQgPSBoZWFkLmdldE5leHQoKTtcbiAgICAgICAgICAgIGxpc3RTaXplIC09IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5keCA8IGxpc3RTaXplKSB7XG4gICAgICAgICAgICBsZXQgbGVmdE5vZGUgPSBoZWFkLCBjb3VudGVyID0gMTtcbiAgICAgICAgICAgIHdoaWxlIChjb3VudGVyIDwgaW5keCkge1xuICAgICAgICAgICAgICAgIGxlZnROb2RlID0gbGVmdE5vZGUuZ2V0TmV4dCgpO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0b0JlUmVtb3ZlZCA9IGxlZnROb2RlLmdldE5leHQoKTtcbiAgICAgICAgICAgIGxlZnROb2RlLnNldE5leHQodG9CZVJlbW92ZWQuZ2V0TmV4dCgpKTtcbiAgICAgICAgICAgIGxpc3RTaXplIC09IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNvcnJ5LCBpbmRleCBvdXQgb2YgYm91bmRzIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcmVwciA9IFwiXCI7XG4gICAgICAgIGxldCBlbGVtZW50ID0gaGVhZDsgXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlcHIgKz0gXCJudWxsXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgcmVwciArPSBlbGVtZW50LmdldFZhbHVlKCkgKyBcIiAtPiBcIjtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LmdldE5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVwcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge2FwcGVuZCwgcHJlcGVuZCwgZ2V0U2l6ZSwgZ2V0SGVhZCwgZ2V0VGFpbCwgZWxlbWVudEF0LCBwb3AsIGluc2VydEF0LCByZW1vdmUsIHRvU3RyaW5nfTtcbn1cblxuZXhwb3J0IHtjcmVhdGVMaXN0fTsiLCJmdW5jdGlvbiBjcmVhdGVOb2RlKHZhbCA9IG51bGwsIG5leHQgPSBudWxsKSB7XG4gICAgbGV0IHZhbHVlID0gdmFsO1xuICAgIGxldCBuZXh0Tm9kZSA9IG5leHQ7XG4gICAgXG4gICAgY29uc3Qgc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZhbHVlID0gdmFsO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TmV4dCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIG5leHROb2RlID0gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV4dE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRWYWx1ZSwgc2V0VmFsdWUsIGdldE5leHQsIHNldE5leHR9O1xufVxuXG5leHBvcnQge2NyZWF0ZU5vZGV9OyIsImZ1bmN0aW9uIGNyZWF0ZVRyZWVOb2RlKHZhbCA9IG51bGwsIGxlZnQgPSBudWxsLCByaWdodCA9IG51bGwpIHtcbiAgICBsZXQgdmFsdWUgPSB2YWw7XG4gICAgbGV0IGxlZnROb2RlID0gbGVmdDtcbiAgICBsZXQgcmlnaHROb2RlID0gcmlnaHQ7XG5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IGZ1bmN0aW9uIChub2RlVmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBub2RlVmFsdWU7XG4gICAgfSBcbiAgICBcbiAgICBjb25zdCBnZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldExlZnQgPSBmdW5jdGlvbiAodHJlZU5vZGUpIHtcbiAgICAgICAgbGVmdE5vZGUgPSB0cmVlTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMZWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbGVmdE5vZGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UmlnaHQgPSBmdW5jdGlvbiAodHJlZU5vZGUpIHtcbiAgICAgICAgcmlnaHROb2RlID0gdHJlZU5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByaWdodE5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgdG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB2YWx1ZSArIFwiIFwiICsgbGVmdE5vZGUuZ2V0VmFsdWUoKSArIFwiIChMKSBcIiArIHJpZ2h0Tm9kZS5nZXRWYWx1ZSgpICsgXCIgKFIpIFwiO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0VmFsdWUsIHNldFZhbHVlLCBnZXRMZWZ0LCBzZXRMZWZ0LCBnZXRSaWdodCwgc2V0UmlnaHR9O1xufVxuXG5leHBvcnQge2NyZWF0ZVRyZWVOb2RlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUxpc3QgfSBmcm9tIFwiLi9saW5rZWRMaXN0XCI7XG5pbXBvcnQgeyBjcmVhdGVUcmVlIH0gZnJvbSBcIi4vYmluYXJ5VHJlZVwiO1xuXG5cbi8vIGxldCBuZXdMaXN0ID0gY3JlYXRlTGlzdCgpO1xuLy8gbmV3TGlzdC5hcHBlbmQoMSk7XG4vLyBuZXdMaXN0LmFwcGVuZCgyKTtcbi8vIG5ld0xpc3QuYXBwZW5kKDMpO1xuLy8gbmV3TGlzdC5hcHBlbmQoNCk7XG4vLyBuZXdMaXN0LmFwcGVuZCg1KTtcbi8vIGNvbnNvbGUubG9nKG5ld0xpc3QudG9TdHJpbmcoKSk7XG4vLyBuZXdMaXN0Lmluc2VydEF0KDIsIDYpO1xuLy8gY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbi8vIG5ld0xpc3QuaW5zZXJ0QXQoMCwgNyk7XG4vLyBjb25zb2xlLmxvZyhuZXdMaXN0LnRvU3RyaW5nKCkpO1xuLy8gbmV3TGlzdC5pbnNlcnRBdCgyLCA4KTtcbi8vIGNvbnNvbGUubG9nKG5ld0xpc3QudG9TdHJpbmcoKSk7XG4vLyBuZXdMaXN0LnJlbW92ZSgwKTtcbi8vIGNvbnNvbGUubG9nKG5ld0xpc3QudG9TdHJpbmcoKSk7XG4vLyBuZXdMaXN0LnJlbW92ZSgyKTtcbi8vIGNvbnNvbGUubG9nKG5ld0xpc3QudG9TdHJpbmcoKSk7XG4vLyBuZXdMaXN0LnJlbW92ZSg1KTtcbi8vIGNvbnNvbGUubG9nKG5ld0xpc3QudG9TdHJpbmcoKSk7XG5sZXQgbmV3VHJlZSA9IGNyZWF0ZVRyZWUoKTtcbm5ld1RyZWUuaW5zZXJ0KFwiRlwiKTtcbm5ld1RyZWUuaW5zZXJ0KFwiRFwiKTtcbm5ld1RyZWUuaW5zZXJ0KFwiSlwiKTtcbm5ld1RyZWUuaW5zZXJ0KFwiQlwiKTtcbm5ld1RyZWUuaW5zZXJ0KFwiRVwiKTtcbm5ld1RyZWUuaW5zZXJ0KFwiR1wiKTtcbm5ld1RyZWUuaW5zZXJ0KFwiS1wiKTtcbm5ld1RyZWUuaW5zZXJ0KFwiQVwiKTtcbm5ld1RyZWUuaW5zZXJ0KFwiQ1wiKTtcbm5ld1RyZWUuaW5zZXJ0KFwiSVwiKTtcbm5ld1RyZWUuaW5zZXJ0KFwiSFwiKTtcbmNvbnNvbGUubG9nKG5ld1RyZWUubGV2ZWxPcmRlcihuZXdUcmVlLmdldFJvb3QoKSkpO1xuY29uc29sZS5sb2cobmV3VHJlZS5maW5kKFwiSlwiKS5nZXRSaWdodCgpLmdldFZhbHVlKCkpO1xuLy8gY29uc29sZS5sb2cobmV3VHJlZS5sZXZlbE9yZGVyKG5ld1RyZWUuZ2V0Um9vdCgpKSk7XG4vLyBjb25zb2xlLmxvZyhuZXdUcmVlLmluT3JkZXIobmV3VHJlZS5nZXRSb290KCkpKTtcbi8vIGNvbnNvbGUubG9nKG5ld1RyZWUucHJlT3JkZXIobmV3VHJlZS5nZXRSb290KCkpKTtcbi8vIGNvbnNvbGUubG9nKG5ld1RyZWUucG9zdE9yZGVyKG5ld1RyZWUuZ2V0Um9vdCgpKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9