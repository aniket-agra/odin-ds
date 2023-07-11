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

    const append = function (value) {
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

    return {append, getRoot, inOrder, preOrder, postOrder, levelOrder, levelOrderRecursive};
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
newTree.append("F");
newTree.append("D");
newTree.append("J");
newTree.append("B");
newTree.append("E");
newTree.append("G");
newTree.append("K");
newTree.append("A");
newTree.append("C");
newTree.append("I");
newTree.append("H");
console.log(newTree.levelOrderRecursive([newTree.getRoot()]));
// console.log(newTree.inOrder(newTree.getRoot()));
// console.log(newTree.preOrder(newTree.getRoot()));
// console.log(newTree.postOrder(newTree.getRoot()));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDs7Ozs7Ozs7Ozs7OztBQ04wQztBQUNBOzs7QUFHMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHVEQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tZHMvLi9zcmMvYmluYXJ5VHJlZS5qcyIsIndlYnBhY2s6Ly9vZGluLWRzLy4vc3JjL2xpbmtlZExpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy8uL3NyYy9saXN0Tm9kZS5qcyIsIndlYnBhY2s6Ly9vZGluLWRzLy4vc3JjL3RyZWVOb2RlLmpzIiwid2VicGFjazovL29kaW4tZHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWRzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRyZWVOb2RlIH0gZnJvbSBcIi4vdHJlZU5vZGVcIjtcblxuZnVuY3Rpb24gY3JlYXRlVHJlZShyb290Tm9kZSA9IG51bGwpIHtcbiAgICBsZXQgcm9vdCA9IHJvb3ROb2RlO1xuXG4gICAgY29uc3QgYXBwZW5kID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgICAgICAgICByb290ID0gY3JlYXRlVHJlZU5vZGUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSByb290O1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPCBjdXJyZW50LmdldFZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuZ2V0TGVmdCgpICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuZ2V0TGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuc2V0TGVmdChjcmVhdGVUcmVlTm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5nZXRSaWdodCgpICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuZ2V0UmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50LnNldFJpZ2h0KGNyZWF0ZVRyZWVOb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cblxuICAgIGNvbnN0IGluT3JkZXIgPSBmdW5jdGlvbiAodHJlZVJvb3QpIHtcbiAgICAgICAgaWYgKHRyZWVSb290ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5PcmRlcih0cmVlUm9vdC5nZXRMZWZ0KCkpICsgXCJfXCIgKyB0cmVlUm9vdC5nZXRWYWx1ZSgpICsgXCJfXCIgKyBpbk9yZGVyKHRyZWVSb290LmdldFJpZ2h0KCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHByZU9yZGVyID0gZnVuY3Rpb24gKHRyZWVSb290KSB7XG4gICAgICAgIGlmICh0cmVlUm9vdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyZWVSb290LmdldFZhbHVlKCkgKyBcIl9cIiArIHByZU9yZGVyKHRyZWVSb290LmdldExlZnQoKSkgKyBcIl9cIiArIHByZU9yZGVyKHRyZWVSb290LmdldFJpZ2h0KCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvc3RPcmRlciA9IGZ1bmN0aW9uICh0cmVlUm9vdCkge1xuICAgICAgICBpZiAodHJlZVJvb3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3N0T3JkZXIodHJlZVJvb3QuZ2V0TGVmdCgpKSArIFwiX1wiICsgcG9zdE9yZGVyKHRyZWVSb290LmdldFJpZ2h0KCkpICsgXCJfXCIgKyB0cmVlUm9vdC5nZXRWYWx1ZSgpO1xuICAgIH0gICBcblxuICAgIGNvbnN0IGxldmVsT3JkZXIgPSBmdW5jdGlvbiAodHJlZVJvb3QpIHtcbiAgICAgICAgaWYgKHRyZWVSb290ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IHByZXZOb2RlcyA9IFt0cmVlUm9vdF0sIGN1cnJOb2RlcyA9IFtdO1xuICAgICAgICAgICAgd2hpbGUocHJldk5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXZOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmV2Tm9kZXNbaV0uZ2V0VmFsdWUoKSArIFwiIFwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJldk5vZGVzW2ldLmdldExlZnQoKSAhPT0gbnVsbCkgXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyTm9kZXMucHVzaChwcmV2Tm9kZXNbaV0uZ2V0TGVmdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZOb2Rlc1tpXS5nZXRSaWdodCgpICE9PSBudWxsKSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJOb2Rlcy5wdXNoKHByZXZOb2Rlc1tpXS5nZXRSaWdodCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldk5vZGVzID0gY3Vyck5vZGVzO1xuICAgICAgICAgICAgICAgIGN1cnJOb2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIFwiXFxuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbGV2ZWxPcmRlclJlY3Vyc2l2ZSA9IGZ1bmN0aW9uIChub2RlQXJyKSB7XG4gICAgICAgIGlmIChub2RlQXJyLmxlbmd0aCA9PT0gMCkgXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBwcmludEFycmF5ID0gW107XG4gICAgICAgIGxldCBuZXdBcnJheSA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbm9kZUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBub2RlQXJyW2ldO1xuICAgICAgICAgICAgcHJpbnRBcnJheS5wdXNoKGVsZW1lbnQuZ2V0VmFsdWUoKSk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5nZXRMZWZ0KCkgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChlbGVtZW50LmdldExlZnQoKSk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5nZXRSaWdodCgpICE9PSBudWxsKVxuICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goZWxlbWVudC5nZXRSaWdodCgpKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2cocHJpbnRBcnJheSk7XG4gICAgICAgIGxldmVsT3JkZXJSZWN1cnNpdmUobmV3QXJyYXkpO1xuICAgIH1cblxuICAgIHJldHVybiB7YXBwZW5kLCBnZXRSb290LCBpbk9yZGVyLCBwcmVPcmRlciwgcG9zdE9yZGVyLCBsZXZlbE9yZGVyLCBsZXZlbE9yZGVyUmVjdXJzaXZlfTtcbn1cblxuZXhwb3J0e2NyZWF0ZVRyZWV9OyIsImltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi9saXN0Tm9kZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0KCkge1xuICAgIGxldCBoZWFkID0gbnVsbDtcbiAgICBsZXQgdGFpbCA9IGhlYWQ7XG4gICAgbGV0IGxpc3RTaXplID0gMDtcblxuICAgIGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBsZXQgbmV3Tm9kZSA9IGNyZWF0ZU5vZGUodmFsdWUpO1xuICAgICAgICBpZiAoaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaGVhZCA9IG5ld05vZGU7XG4gICAgICAgICAgICB0YWlsID0gaGVhZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhaWwuc2V0TmV4dChuZXdOb2RlKTtcbiAgICAgICAgICAgIHRhaWwgPSBuZXdOb2RlO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RTaXplICs9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgcHJlcGVuZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBsZXQgbmV3Tm9kZSA9IGNyZWF0ZU5vZGUodmFsdWUsIGhlYWQpO1xuICAgICAgICBoZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgbGlzdFNpemUgKz0gMTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbGlzdFNpemU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGhlYWQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFpbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRhaWw7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudEF0ID0gZnVuY3Rpb24gKGluZHgpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBoZWFkO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBpbmR4OyBpKyspIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LmdldE5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRWYWx1ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgaWYgKHRhaWwgPT09IGhlYWQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRhaWw7XG4gICAgICAgICAgICB0YWlsID0gbnVsbDtcbiAgICAgICAgICAgIGhlYWQgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBoZWFkO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5nZXROZXh0KCkgPT09IHRhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQuZ2V0TmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCA9IHRhaWw7XG4gICAgICAgICAgICB0YWlsID0gZWxlbWVudDtcbiAgICAgICAgICAgIHRhaWwuc2V0TmV4dChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0U2l6ZSAtPSAxO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmdldFZhbHVlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5zZXJ0QXQgPSBmdW5jdGlvbiAoaW5keCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGluZHggPT09IDApIHtcbiAgICAgICAgICAgIHByZXBlbmQodmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGluZHggPCBsaXN0U2l6ZSkge1xuICAgICAgICAgICAgbGV0IGxlZnROb2RlID0gaGVhZCwgY291bnRlciA9IDE7XG4gICAgICAgICAgICB3aGlsZSAoY291bnRlciA8IGluZHgpIHtcbiAgICAgICAgICAgICAgICBsZWZ0Tm9kZSA9IGhlYWQuZ2V0TmV4dCgpO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuZXdOb2RlID0gY3JlYXRlTm9kZSh2YWx1ZSk7XG4gICAgICAgICAgICBuZXdOb2RlLnNldE5leHQobGVmdE5vZGUuZ2V0TmV4dCgpKTtcbiAgICAgICAgICAgIGxlZnROb2RlLnNldE5leHQobmV3Tm9kZSk7XG4gICAgICAgICAgICBsaXN0U2l6ZSArPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb3JyeSwgaW5kZXggaXMgZ3JlYXRlciB0aGFuIGxpc3Qgc2l6ZSFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmUgPSBmdW5jdGlvbiAoaW5keCkge1xuICAgICAgICBpZiAoaW5keCA9PT0gMCkge1xuICAgICAgICAgICAgaGVhZCA9IGhlYWQuZ2V0TmV4dCgpO1xuICAgICAgICAgICAgbGlzdFNpemUgLT0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmR4IDwgbGlzdFNpemUpIHtcbiAgICAgICAgICAgIGxldCBsZWZ0Tm9kZSA9IGhlYWQsIGNvdW50ZXIgPSAxO1xuICAgICAgICAgICAgd2hpbGUgKGNvdW50ZXIgPCBpbmR4KSB7XG4gICAgICAgICAgICAgICAgbGVmdE5vZGUgPSBsZWZ0Tm9kZS5nZXROZXh0KCk7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHRvQmVSZW1vdmVkID0gbGVmdE5vZGUuZ2V0TmV4dCgpO1xuICAgICAgICAgICAgbGVmdE5vZGUuc2V0TmV4dCh0b0JlUmVtb3ZlZC5nZXROZXh0KCkpO1xuICAgICAgICAgICAgbGlzdFNpemUgLT0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29ycnksIGluZGV4IG91dCBvZiBib3VuZHMhXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCByZXByID0gXCJcIjtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBoZWFkOyBcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVwciArPSBcIm51bGxcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICByZXByICs9IGVsZW1lbnQuZ2V0VmFsdWUoKSArIFwiIC0+IFwiO1xuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQuZ2V0TmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXByO1xuICAgIH1cblxuICAgIHJldHVybiB7YXBwZW5kLCBwcmVwZW5kLCBnZXRTaXplLCBnZXRIZWFkLCBnZXRUYWlsLCBlbGVtZW50QXQsIHBvcCwgaW5zZXJ0QXQsIHJlbW92ZSwgdG9TdHJpbmd9O1xufVxuXG5leHBvcnQge2NyZWF0ZUxpc3R9OyIsImZ1bmN0aW9uIGNyZWF0ZU5vZGUodmFsID0gbnVsbCwgbmV4dCA9IG51bGwpIHtcbiAgICBsZXQgdmFsdWUgPSB2YWw7XG4gICAgbGV0IG5leHROb2RlID0gbmV4dDtcbiAgICBcbiAgICBjb25zdCBzZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFsdWUgPSB2YWw7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXROZXh0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgbmV4dE5vZGUgPSBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXh0Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFZhbHVlLCBzZXRWYWx1ZSwgZ2V0TmV4dCwgc2V0TmV4dH07XG59XG5cbmV4cG9ydCB7Y3JlYXRlTm9kZX07IiwiZnVuY3Rpb24gY3JlYXRlVHJlZU5vZGUodmFsID0gbnVsbCwgbGVmdCA9IG51bGwsIHJpZ2h0ID0gbnVsbCkge1xuICAgIGxldCB2YWx1ZSA9IHZhbDtcbiAgICBsZXQgbGVmdE5vZGUgPSBsZWZ0O1xuICAgIGxldCByaWdodE5vZGUgPSByaWdodDtcblxuICAgIGNvbnN0IHNldFZhbHVlID0gZnVuY3Rpb24gKG5vZGVWYWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IG5vZGVWYWx1ZTtcbiAgICB9IFxuICAgIFxuICAgIGNvbnN0IGdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TGVmdCA9IGZ1bmN0aW9uICh0cmVlTm9kZSkge1xuICAgICAgICBsZWZ0Tm9kZSA9IHRyZWVOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExlZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsZWZ0Tm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRSaWdodCA9IGZ1bmN0aW9uICh0cmVlTm9kZSkge1xuICAgICAgICByaWdodE5vZGUgPSB0cmVlTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRSaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJpZ2h0Tm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCB0b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHZhbHVlICsgXCIgXCIgKyBsZWZ0Tm9kZS5nZXRWYWx1ZSgpICsgXCIgKEwpIFwiICsgcmlnaHROb2RlLmdldFZhbHVlKCkgKyBcIiAoUikgXCI7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRWYWx1ZSwgc2V0VmFsdWUsIGdldExlZnQsIHNldExlZnQsIGdldFJpZ2h0LCBzZXRSaWdodH07XG59XG5cbmV4cG9ydCB7Y3JlYXRlVHJlZU5vZGV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2xpbmtlZExpc3RcIjtcbmltcG9ydCB7IGNyZWF0ZVRyZWUgfSBmcm9tIFwiLi9iaW5hcnlUcmVlXCI7XG5cblxuLy8gbGV0IG5ld0xpc3QgPSBjcmVhdGVMaXN0KCk7XG4vLyBuZXdMaXN0LmFwcGVuZCgxKTtcbi8vIG5ld0xpc3QuYXBwZW5kKDIpO1xuLy8gbmV3TGlzdC5hcHBlbmQoMyk7XG4vLyBuZXdMaXN0LmFwcGVuZCg0KTtcbi8vIG5ld0xpc3QuYXBwZW5kKDUpO1xuLy8gY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbi8vIG5ld0xpc3QuaW5zZXJ0QXQoMiwgNik7XG4vLyBjb25zb2xlLmxvZyhuZXdMaXN0LnRvU3RyaW5nKCkpO1xuLy8gbmV3TGlzdC5pbnNlcnRBdCgwLCA3KTtcbi8vIGNvbnNvbGUubG9nKG5ld0xpc3QudG9TdHJpbmcoKSk7XG4vLyBuZXdMaXN0Lmluc2VydEF0KDIsIDgpO1xuLy8gY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbi8vIG5ld0xpc3QucmVtb3ZlKDApO1xuLy8gY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbi8vIG5ld0xpc3QucmVtb3ZlKDIpO1xuLy8gY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbi8vIG5ld0xpc3QucmVtb3ZlKDUpO1xuLy8gY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbmxldCBuZXdUcmVlID0gY3JlYXRlVHJlZSgpO1xubmV3VHJlZS5hcHBlbmQoXCJGXCIpO1xubmV3VHJlZS5hcHBlbmQoXCJEXCIpO1xubmV3VHJlZS5hcHBlbmQoXCJKXCIpO1xubmV3VHJlZS5hcHBlbmQoXCJCXCIpO1xubmV3VHJlZS5hcHBlbmQoXCJFXCIpO1xubmV3VHJlZS5hcHBlbmQoXCJHXCIpO1xubmV3VHJlZS5hcHBlbmQoXCJLXCIpO1xubmV3VHJlZS5hcHBlbmQoXCJBXCIpO1xubmV3VHJlZS5hcHBlbmQoXCJDXCIpO1xubmV3VHJlZS5hcHBlbmQoXCJJXCIpO1xubmV3VHJlZS5hcHBlbmQoXCJIXCIpO1xuY29uc29sZS5sb2cobmV3VHJlZS5sZXZlbE9yZGVyUmVjdXJzaXZlKFtuZXdUcmVlLmdldFJvb3QoKV0pKTtcbi8vIGNvbnNvbGUubG9nKG5ld1RyZWUuaW5PcmRlcihuZXdUcmVlLmdldFJvb3QoKSkpO1xuLy8gY29uc29sZS5sb2cobmV3VHJlZS5wcmVPcmRlcihuZXdUcmVlLmdldFJvb3QoKSkpO1xuLy8gY29uc29sZS5sb2cobmV3VHJlZS5wb3N0T3JkZXIobmV3VHJlZS5nZXRSb290KCkpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=