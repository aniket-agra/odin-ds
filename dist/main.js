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

    const heightNode = function (treeNode) {
        if (treeNode === null) {
            return Number.MIN_SAFE_INTEGER;
        }
        if (treeNode.getLeft() === null && treeNode.getRight() === null) {
            return 0;
        } 
        return Math.max(heightNode(treeNode.getLeft()), heightNode(treeNode.getRight())) + 1;
    }

    const heightNodeDP = function (treeNode, heightObj) {
        if (treeNode === null) {
            return -1;
        }
        if (heightObj[treeNode.getValue()] !== undefined) {
            return heightObj[treeNode.getValue()];
        }
        heightObj[treeNode.getValue()] = Math.max(heightNodeDP(treeNode.getLeft(), heightObj), heightNodeDP(treeNode.getRight(), heightObj)) + 1;
        return heightObj[treeNode.getValue()];
    }

    const height = function (value) {
        let obj = {};
        let nodeHeight =  heightNodeDP(find(value), obj);
        console.log(obj);
        return nodeHeight;
    }

    const depth = function (value) {
        let count = 0, current = root;
        while (true) {
            if (current === null) {
                return -1;
            }
            if (value === current.getValue()) {
                return count;
            }
            if (value < current.getValue()) {
                count += 1;
                current = current.getLeft();
            } else {
                count += 1;
                current = current.getRight();
            }
        }
    }

    return {insert, getRoot, inOrder, preOrder, postOrder, levelOrder, 
        levelOrderRecursive, remove, height, find, depth};
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
console.log(newTree.height("F"));
// console.log(newTree.levelOrder(newTree.getRoot()));
// console.log(newTree.inOrder(newTree.getRoot()));
// console.log(newTree.preOrder(newTree.getRoot()));
// console.log(newTree.postOrder(newTree.getRoot()));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQix5REFBYztBQUNqQyxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHlEQUFjO0FBQ3REO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHlEQUFjO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5TXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixxREFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixxREFBVTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxREFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7Ozs7Ozs7VUNuQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDQTs7O0FBRzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1REFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1kcy8uL3NyYy9iaW5hcnlUcmVlLmpzIiwid2VicGFjazovL29kaW4tZHMvLi9zcmMvbGlua2VkTGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLWRzLy4vc3JjL2xpc3ROb2RlLmpzIiwid2VicGFjazovL29kaW4tZHMvLi9zcmMvdHJlZU5vZGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tZHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVHJlZU5vZGUgfSBmcm9tIFwiLi90cmVlTm9kZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVUcmVlKHJvb3ROb2RlID0gbnVsbCkge1xuICAgIGxldCByb290ID0gcm9vdE5vZGU7XG5cbiAgICBjb25zdCBpbnNlcnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJvb3QgPSBjcmVhdGVUcmVlTm9kZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IHJvb3Q7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8IGN1cnJlbnQuZ2V0VmFsdWUoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5nZXRMZWZ0KCkgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5nZXRMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudC5zZXRMZWZ0KGNyZWF0ZVRyZWVOb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmdldFJpZ2h0KCkgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5nZXRSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuc2V0UmlnaHQoY3JlYXRlVHJlZU5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuXG4gICAgY29uc3QgaW5PcmRlciA9IGZ1bmN0aW9uICh0cmVlUm9vdCkge1xuICAgICAgICBpZiAodHJlZVJvb3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbk9yZGVyKHRyZWVSb290LmdldExlZnQoKSkgKyBcIl9cIiArIHRyZWVSb290LmdldFZhbHVlKCkgKyBcIl9cIiArIGluT3JkZXIodHJlZVJvb3QuZ2V0UmlnaHQoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJlT3JkZXIgPSBmdW5jdGlvbiAodHJlZVJvb3QpIHtcbiAgICAgICAgaWYgKHRyZWVSb290ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJlZVJvb3QuZ2V0VmFsdWUoKSArIFwiX1wiICsgcHJlT3JkZXIodHJlZVJvb3QuZ2V0TGVmdCgpKSArIFwiX1wiICsgcHJlT3JkZXIodHJlZVJvb3QuZ2V0UmlnaHQoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9zdE9yZGVyID0gZnVuY3Rpb24gKHRyZWVSb290KSB7XG4gICAgICAgIGlmICh0cmVlUm9vdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc3RPcmRlcih0cmVlUm9vdC5nZXRMZWZ0KCkpICsgXCJfXCIgKyBwb3N0T3JkZXIodHJlZVJvb3QuZ2V0UmlnaHQoKSkgKyBcIl9cIiArIHRyZWVSb290LmdldFZhbHVlKCk7XG4gICAgfSAgIFxuXG4gICAgY29uc3QgbGV2ZWxPcmRlciA9IGZ1bmN0aW9uICh0cmVlUm9vdCkge1xuICAgICAgICBpZiAodHJlZVJvb3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgcHJldk5vZGVzID0gW3RyZWVSb290XSwgY3Vyck5vZGVzID0gW107XG4gICAgICAgICAgICB3aGlsZShwcmV2Tm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJldk5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByZXZOb2Rlc1tpXS5nZXRWYWx1ZSgpICsgXCIgXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2Tm9kZXNbaV0uZ2V0TGVmdCgpICE9PSBudWxsKSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJOb2Rlcy5wdXNoKHByZXZOb2Rlc1tpXS5nZXRMZWZ0KCkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJldk5vZGVzW2ldLmdldFJpZ2h0KCkgIT09IG51bGwpIFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyck5vZGVzLnB1c2gocHJldk5vZGVzW2ldLmdldFJpZ2h0KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2Tm9kZXMgPSBjdXJyTm9kZXM7XG4gICAgICAgICAgICAgICAgY3Vyck5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgXCJcXG5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsZXZlbE9yZGVyUmVjdXJzaXZlID0gZnVuY3Rpb24gKG5vZGVBcnIpIHtcbiAgICAgICAgaWYgKG5vZGVBcnIubGVuZ3RoID09PSAwKSBcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IHByaW50QXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IG5ld0FycmF5ID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBub2RlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IG5vZGVBcnJbaV07XG4gICAgICAgICAgICBwcmludEFycmF5LnB1c2goZWxlbWVudC5nZXRWYWx1ZSgpKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmdldExlZnQoKSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGVsZW1lbnQuZ2V0TGVmdCgpKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmdldFJpZ2h0KCkgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChlbGVtZW50LmdldFJpZ2h0KCkpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhwcmludEFycmF5KTtcbiAgICAgICAgbGV2ZWxPcmRlclJlY3Vyc2l2ZShuZXdBcnJheSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgbGV0IHByZXYgPSBudWxsLCBjdXJyZW50ID0gcm9vdDtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnQuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPCBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmdldExlZnQoKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID4gY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2ID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmdldFJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50ID09PSBudWxsKSBcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJjYW5ub3QgcmVtb3ZlIG5vbi1leGlzdGVudCBlbGVtZW50IVwiKTtcbiAgICAgICAgbGV0IGxlZnRDaGlsZCA9IGN1cnJlbnQuZ2V0TGVmdCgpLCByaWdodENoaWxkID0gY3VycmVudC5nZXRSaWdodCgpO1xuICAgICAgICBpZiAobGVmdENoaWxkID09PSBudWxsKSB7XG4gICAgICAgICAgICBwcmV2LmdldExlZnQoKSA9PT0gY3VycmVudCA/IHByZXYuc2V0TGVmdChyaWdodENoaWxkKSA6IHByZXYuc2V0UmlnaHQocmlnaHRDaGlsZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0Q2hpbGQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHByZXYuZ2V0TGVmdCgpID09PSBjdXJyZW50ID8gcHJldi5zZXRMZWZ0KGxlZnRDaGlsZCkgOiBwcmV2LnNldFJpZ2h0KGxlZnRDaGlsZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByZXZOb2RlID0gbGVmdENoaWxkLCBjdXJyTm9kZSA9IHByZXZOb2RlLmdldFJpZ2h0KCk7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAoY3Vyck5vZGUgPT09IG51bGwpICB7XG4gICAgICAgICAgICAgICAgcHJldk5vZGUuc2V0UmlnaHQocmlnaHRDaGlsZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2Tm9kZSA9IGN1cnJOb2RlO1xuICAgICAgICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5nZXRSaWdodCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmV2LmdldExlZnQoKSA9PT0gY3VycmVudCkge1xuICAgICAgICAgICAgcHJldi5zZXRMZWZ0KGxlZnRDaGlsZCk7XG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJldi5zZXRSaWdodChsZWZ0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHJvb3Q7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAoKGN1cnJlbnQgPT09IG51bGwpIHx8IChjdXJyZW50LmdldFZhbHVlKCkgPT09IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgY3VycmVudC5nZXRWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuZ2V0TGVmdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5nZXRSaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodE5vZGUgPSBmdW5jdGlvbiAodHJlZU5vZGUpIHtcbiAgICAgICAgaWYgKHRyZWVOb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyZWVOb2RlLmdldExlZnQoKSA9PT0gbnVsbCAmJiB0cmVlTm9kZS5nZXRSaWdodCgpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KGhlaWdodE5vZGUodHJlZU5vZGUuZ2V0TGVmdCgpKSwgaGVpZ2h0Tm9kZSh0cmVlTm9kZS5nZXRSaWdodCgpKSkgKyAxO1xuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodE5vZGVEUCA9IGZ1bmN0aW9uICh0cmVlTm9kZSwgaGVpZ2h0T2JqKSB7XG4gICAgICAgIGlmICh0cmVlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWlnaHRPYmpbdHJlZU5vZGUuZ2V0VmFsdWUoKV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGhlaWdodE9ialt0cmVlTm9kZS5nZXRWYWx1ZSgpXTtcbiAgICAgICAgfVxuICAgICAgICBoZWlnaHRPYmpbdHJlZU5vZGUuZ2V0VmFsdWUoKV0gPSBNYXRoLm1heChoZWlnaHROb2RlRFAodHJlZU5vZGUuZ2V0TGVmdCgpLCBoZWlnaHRPYmopLCBoZWlnaHROb2RlRFAodHJlZU5vZGUuZ2V0UmlnaHQoKSwgaGVpZ2h0T2JqKSkgKyAxO1xuICAgICAgICByZXR1cm4gaGVpZ2h0T2JqW3RyZWVOb2RlLmdldFZhbHVlKCldO1xuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgIGxldCBub2RlSGVpZ2h0ID0gIGhlaWdodE5vZGVEUChmaW5kKHZhbHVlKSwgb2JqKTtcbiAgICAgICAgY29uc29sZS5sb2cob2JqKTtcbiAgICAgICAgcmV0dXJuIG5vZGVIZWlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3QgZGVwdGggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMCwgY3VycmVudCA9IHJvb3Q7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gY3VycmVudC5nZXRWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgY3VycmVudC5nZXRWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5nZXRMZWZ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuZ2V0UmlnaHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7aW5zZXJ0LCBnZXRSb290LCBpbk9yZGVyLCBwcmVPcmRlciwgcG9zdE9yZGVyLCBsZXZlbE9yZGVyLCBcbiAgICAgICAgbGV2ZWxPcmRlclJlY3Vyc2l2ZSwgcmVtb3ZlLCBoZWlnaHQsIGZpbmQsIGRlcHRofTtcbn1cblxuZXhwb3J0e2NyZWF0ZVRyZWV9OyIsImltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi9saXN0Tm9kZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0KCkge1xuICAgIGxldCBoZWFkID0gbnVsbDtcbiAgICBsZXQgdGFpbCA9IGhlYWQ7XG4gICAgbGV0IGxpc3RTaXplID0gMDtcblxuICAgIGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBsZXQgbmV3Tm9kZSA9IGNyZWF0ZU5vZGUodmFsdWUpO1xuICAgICAgICBpZiAoaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaGVhZCA9IG5ld05vZGU7XG4gICAgICAgICAgICB0YWlsID0gaGVhZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhaWwuc2V0TmV4dChuZXdOb2RlKTtcbiAgICAgICAgICAgIHRhaWwgPSBuZXdOb2RlO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RTaXplICs9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgcHJlcGVuZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBsZXQgbmV3Tm9kZSA9IGNyZWF0ZU5vZGUodmFsdWUsIGhlYWQpO1xuICAgICAgICBoZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgbGlzdFNpemUgKz0gMTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbGlzdFNpemU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGhlYWQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFpbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRhaWw7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudEF0ID0gZnVuY3Rpb24gKGluZHgpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBoZWFkO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBpbmR4OyBpKyspIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LmdldE5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRWYWx1ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgaWYgKHRhaWwgPT09IGhlYWQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRhaWw7XG4gICAgICAgICAgICB0YWlsID0gbnVsbDtcbiAgICAgICAgICAgIGhlYWQgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBoZWFkO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5nZXROZXh0KCkgPT09IHRhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQuZ2V0TmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCA9IHRhaWw7XG4gICAgICAgICAgICB0YWlsID0gZWxlbWVudDtcbiAgICAgICAgICAgIHRhaWwuc2V0TmV4dChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0U2l6ZSAtPSAxO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmdldFZhbHVlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5zZXJ0QXQgPSBmdW5jdGlvbiAoaW5keCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGluZHggPT09IDApIHtcbiAgICAgICAgICAgIHByZXBlbmQodmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGluZHggPCBsaXN0U2l6ZSkge1xuICAgICAgICAgICAgbGV0IGxlZnROb2RlID0gaGVhZCwgY291bnRlciA9IDE7XG4gICAgICAgICAgICB3aGlsZSAoY291bnRlciA8IGluZHgpIHtcbiAgICAgICAgICAgICAgICBsZWZ0Tm9kZSA9IGhlYWQuZ2V0TmV4dCgpO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuZXdOb2RlID0gY3JlYXRlTm9kZSh2YWx1ZSk7XG4gICAgICAgICAgICBuZXdOb2RlLnNldE5leHQobGVmdE5vZGUuZ2V0TmV4dCgpKTtcbiAgICAgICAgICAgIGxlZnROb2RlLnNldE5leHQobmV3Tm9kZSk7XG4gICAgICAgICAgICBsaXN0U2l6ZSArPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb3JyeSwgaW5kZXggaXMgZ3JlYXRlciB0aGFuIGxpc3Qgc2l6ZSFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmUgPSBmdW5jdGlvbiAoaW5keCkge1xuICAgICAgICBpZiAoaW5keCA9PT0gMCkge1xuICAgICAgICAgICAgaGVhZCA9IGhlYWQuZ2V0TmV4dCgpO1xuICAgICAgICAgICAgbGlzdFNpemUgLT0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmR4IDwgbGlzdFNpemUpIHtcbiAgICAgICAgICAgIGxldCBsZWZ0Tm9kZSA9IGhlYWQsIGNvdW50ZXIgPSAxO1xuICAgICAgICAgICAgd2hpbGUgKGNvdW50ZXIgPCBpbmR4KSB7XG4gICAgICAgICAgICAgICAgbGVmdE5vZGUgPSBsZWZ0Tm9kZS5nZXROZXh0KCk7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHRvQmVSZW1vdmVkID0gbGVmdE5vZGUuZ2V0TmV4dCgpO1xuICAgICAgICAgICAgbGVmdE5vZGUuc2V0TmV4dCh0b0JlUmVtb3ZlZC5nZXROZXh0KCkpO1xuICAgICAgICAgICAgbGlzdFNpemUgLT0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29ycnksIGluZGV4IG91dCBvZiBib3VuZHMhXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCByZXByID0gXCJcIjtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBoZWFkOyBcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVwciArPSBcIm51bGxcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICByZXByICs9IGVsZW1lbnQuZ2V0VmFsdWUoKSArIFwiIC0+IFwiO1xuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQuZ2V0TmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXByO1xuICAgIH1cblxuICAgIHJldHVybiB7YXBwZW5kLCBwcmVwZW5kLCBnZXRTaXplLCBnZXRIZWFkLCBnZXRUYWlsLCBlbGVtZW50QXQsIHBvcCwgaW5zZXJ0QXQsIHJlbW92ZSwgdG9TdHJpbmd9O1xufVxuXG5leHBvcnQge2NyZWF0ZUxpc3R9OyIsImZ1bmN0aW9uIGNyZWF0ZU5vZGUodmFsID0gbnVsbCwgbmV4dCA9IG51bGwpIHtcbiAgICBsZXQgdmFsdWUgPSB2YWw7XG4gICAgbGV0IG5leHROb2RlID0gbmV4dDtcbiAgICBcbiAgICBjb25zdCBzZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFsdWUgPSB2YWw7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXROZXh0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgbmV4dE5vZGUgPSBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXh0Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFZhbHVlLCBzZXRWYWx1ZSwgZ2V0TmV4dCwgc2V0TmV4dH07XG59XG5cbmV4cG9ydCB7Y3JlYXRlTm9kZX07IiwiZnVuY3Rpb24gY3JlYXRlVHJlZU5vZGUodmFsID0gbnVsbCwgbGVmdCA9IG51bGwsIHJpZ2h0ID0gbnVsbCkge1xuICAgIGxldCB2YWx1ZSA9IHZhbDtcbiAgICBsZXQgbGVmdE5vZGUgPSBsZWZ0O1xuICAgIGxldCByaWdodE5vZGUgPSByaWdodDtcblxuICAgIGNvbnN0IHNldFZhbHVlID0gZnVuY3Rpb24gKG5vZGVWYWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IG5vZGVWYWx1ZTtcbiAgICB9IFxuICAgIFxuICAgIGNvbnN0IGdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TGVmdCA9IGZ1bmN0aW9uICh0cmVlTm9kZSkge1xuICAgICAgICBsZWZ0Tm9kZSA9IHRyZWVOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExlZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsZWZ0Tm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRSaWdodCA9IGZ1bmN0aW9uICh0cmVlTm9kZSkge1xuICAgICAgICByaWdodE5vZGUgPSB0cmVlTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRSaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJpZ2h0Tm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCB0b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHZhbHVlICsgXCIgXCIgKyBsZWZ0Tm9kZS5nZXRWYWx1ZSgpICsgXCIgKEwpIFwiICsgcmlnaHROb2RlLmdldFZhbHVlKCkgKyBcIiAoUikgXCI7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRWYWx1ZSwgc2V0VmFsdWUsIGdldExlZnQsIHNldExlZnQsIGdldFJpZ2h0LCBzZXRSaWdodH07XG59XG5cbmV4cG9ydCB7Y3JlYXRlVHJlZU5vZGV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2xpbmtlZExpc3RcIjtcbmltcG9ydCB7IGNyZWF0ZVRyZWUgfSBmcm9tIFwiLi9iaW5hcnlUcmVlXCI7XG5cblxuLy8gbGV0IG5ld0xpc3QgPSBjcmVhdGVMaXN0KCk7XG4vLyBuZXdMaXN0LmFwcGVuZCgxKTtcbi8vIG5ld0xpc3QuYXBwZW5kKDIpO1xuLy8gbmV3TGlzdC5hcHBlbmQoMyk7XG4vLyBuZXdMaXN0LmFwcGVuZCg0KTtcbi8vIG5ld0xpc3QuYXBwZW5kKDUpO1xuLy8gY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbi8vIG5ld0xpc3QuaW5zZXJ0QXQoMiwgNik7XG4vLyBjb25zb2xlLmxvZyhuZXdMaXN0LnRvU3RyaW5nKCkpO1xuLy8gbmV3TGlzdC5pbnNlcnRBdCgwLCA3KTtcbi8vIGNvbnNvbGUubG9nKG5ld0xpc3QudG9TdHJpbmcoKSk7XG4vLyBuZXdMaXN0Lmluc2VydEF0KDIsIDgpO1xuLy8gY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbi8vIG5ld0xpc3QucmVtb3ZlKDApO1xuLy8gY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbi8vIG5ld0xpc3QucmVtb3ZlKDIpO1xuLy8gY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbi8vIG5ld0xpc3QucmVtb3ZlKDUpO1xuLy8gY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbmxldCBuZXdUcmVlID0gY3JlYXRlVHJlZSgpO1xubmV3VHJlZS5pbnNlcnQoXCJGXCIpO1xubmV3VHJlZS5pbnNlcnQoXCJEXCIpO1xubmV3VHJlZS5pbnNlcnQoXCJKXCIpO1xubmV3VHJlZS5pbnNlcnQoXCJCXCIpO1xubmV3VHJlZS5pbnNlcnQoXCJFXCIpO1xubmV3VHJlZS5pbnNlcnQoXCJHXCIpO1xubmV3VHJlZS5pbnNlcnQoXCJLXCIpO1xubmV3VHJlZS5pbnNlcnQoXCJBXCIpO1xubmV3VHJlZS5pbnNlcnQoXCJDXCIpO1xubmV3VHJlZS5pbnNlcnQoXCJJXCIpO1xubmV3VHJlZS5pbnNlcnQoXCJIXCIpO1xuY29uc29sZS5sb2cobmV3VHJlZS5sZXZlbE9yZGVyKG5ld1RyZWUuZ2V0Um9vdCgpKSk7XG5jb25zb2xlLmxvZyhuZXdUcmVlLmhlaWdodChcIkZcIikpO1xuLy8gY29uc29sZS5sb2cobmV3VHJlZS5sZXZlbE9yZGVyKG5ld1RyZWUuZ2V0Um9vdCgpKSk7XG4vLyBjb25zb2xlLmxvZyhuZXdUcmVlLmluT3JkZXIobmV3VHJlZS5nZXRSb290KCkpKTtcbi8vIGNvbnNvbGUubG9nKG5ld1RyZWUucHJlT3JkZXIobmV3VHJlZS5nZXRSb290KCkpKTtcbi8vIGNvbnNvbGUubG9nKG5ld1RyZWUucG9zdE9yZGVyKG5ld1RyZWUuZ2V0Um9vdCgpKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9