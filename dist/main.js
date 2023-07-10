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

    const breadthTraverse = function (treeRoot) {
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

    return {append, getRoot, inOrder, preOrder, postOrder, breadthTraverse};
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
        } else {
            console.log("Sorry, index is greater than list size!");
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

    return {append, prepend, getSize, getHead, getTail, elementAt, pop, toString, insertAt};
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




let newList = (0,_linkedList__WEBPACK_IMPORTED_MODULE_0__.createList)();
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Esd0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWRzLy4vc3JjL2JpbmFyeVRyZWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy8uL3NyYy9saW5rZWRMaXN0LmpzIiwid2VicGFjazovL29kaW4tZHMvLi9zcmMvbGlzdE5vZGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy8uL3NyYy90cmVlTm9kZS5qcyIsIndlYnBhY2s6Ly9vZGluLWRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tZHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tZHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUcmVlTm9kZSB9IGZyb20gXCIuL3RyZWVOb2RlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRyZWUocm9vdE5vZGUgPSBudWxsKSB7XG4gICAgbGV0IHJvb3QgPSByb290Tm9kZTtcblxuICAgIGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcm9vdCA9IGNyZWF0ZVRyZWVOb2RlKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gcm9vdDtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIDwgY3VycmVudC5nZXRWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmdldExlZnQoKSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmdldExlZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50LnNldExlZnQoY3JlYXRlVHJlZU5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuZ2V0UmlnaHQoKSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmdldFJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudC5zZXRSaWdodChjcmVhdGVUcmVlTm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG5cbiAgICBjb25zdCBpbk9yZGVyID0gZnVuY3Rpb24gKHRyZWVSb290KSB7XG4gICAgICAgIGlmICh0cmVlUm9vdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluT3JkZXIodHJlZVJvb3QuZ2V0TGVmdCgpKSArIFwiX1wiICsgdHJlZVJvb3QuZ2V0VmFsdWUoKSArIFwiX1wiICsgaW5PcmRlcih0cmVlUm9vdC5nZXRSaWdodCgpKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmVPcmRlciA9IGZ1bmN0aW9uICh0cmVlUm9vdCkge1xuICAgICAgICBpZiAodHJlZVJvb3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cmVlUm9vdC5nZXRWYWx1ZSgpICsgXCJfXCIgKyBwcmVPcmRlcih0cmVlUm9vdC5nZXRMZWZ0KCkpICsgXCJfXCIgKyBwcmVPcmRlcih0cmVlUm9vdC5nZXRSaWdodCgpKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb3N0T3JkZXIgPSBmdW5jdGlvbiAodHJlZVJvb3QpIHtcbiAgICAgICAgaWYgKHRyZWVSb290ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zdE9yZGVyKHRyZWVSb290LmdldExlZnQoKSkgKyBcIl9cIiArIHBvc3RPcmRlcih0cmVlUm9vdC5nZXRSaWdodCgpKSArIFwiX1wiICsgdHJlZVJvb3QuZ2V0VmFsdWUoKTtcbiAgICB9ICAgXG5cbiAgICBjb25zdCBicmVhZHRoVHJhdmVyc2UgPSBmdW5jdGlvbiAodHJlZVJvb3QpIHtcbiAgICAgICAgaWYgKHRyZWVSb290ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IHByZXZOb2RlcyA9IFt0cmVlUm9vdF0sIGN1cnJOb2RlcyA9IFtdO1xuICAgICAgICAgICAgd2hpbGUocHJldk5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXZOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmV2Tm9kZXNbaV0uZ2V0VmFsdWUoKSArIFwiIFwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJldk5vZGVzW2ldLmdldExlZnQoKSAhPT0gbnVsbCkgXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyTm9kZXMucHVzaChwcmV2Tm9kZXNbaV0uZ2V0TGVmdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZOb2Rlc1tpXS5nZXRSaWdodCgpICE9PSBudWxsKSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJOb2Rlcy5wdXNoKHByZXZOb2Rlc1tpXS5nZXRSaWdodCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldk5vZGVzID0gY3Vyck5vZGVzO1xuICAgICAgICAgICAgICAgIGN1cnJOb2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIFwiXFxuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHthcHBlbmQsIGdldFJvb3QsIGluT3JkZXIsIHByZU9yZGVyLCBwb3N0T3JkZXIsIGJyZWFkdGhUcmF2ZXJzZX07XG59XG5cbmV4cG9ydHtjcmVhdGVUcmVlfTsiLCJpbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4vbGlzdE5vZGVcIjtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdCgpIHtcbiAgICBsZXQgaGVhZCA9IG51bGw7XG4gICAgbGV0IHRhaWwgPSBoZWFkO1xuICAgIGxldCBsaXN0U2l6ZSA9IDA7XG5cbiAgICBjb25zdCBhcHBlbmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgbGV0IG5ld05vZGUgPSBjcmVhdGVOb2RlKHZhbHVlKTtcbiAgICAgICAgaWYgKGhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGFpbCA9IGhlYWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWlsLnNldE5leHQobmV3Tm9kZSk7XG4gICAgICAgICAgICB0YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0U2l6ZSArPSAxO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXBlbmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgbGV0IG5ld05vZGUgPSBjcmVhdGVOb2RlKHZhbHVlLCBoZWFkKTtcbiAgICAgICAgaGVhZCA9IG5ld05vZGU7XG4gICAgICAgIGxpc3RTaXplICs9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RTaXplO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEhlYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBoZWFkO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRhaWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0YWlsO1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRBdCA9IGZ1bmN0aW9uIChpbmR4KSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gaGVhZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gaW5keDsgaSsrKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5nZXROZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0VmFsdWUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmICh0YWlsID09PSBoZWFkKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0YWlsO1xuICAgICAgICAgICAgdGFpbCA9IG51bGw7XG4gICAgICAgICAgICBoZWFkID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gaGVhZDtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ2V0TmV4dCgpID09PSB0YWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LmdldE5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgPSB0YWlsO1xuICAgICAgICAgICAgdGFpbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB0YWlsLnNldE5leHQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdFNpemUgLT0gMTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5nZXRWYWx1ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGluc2VydEF0ID0gZnVuY3Rpb24gKGluZHgsIHZhbHVlKSB7XG4gICAgICAgIGlmIChpbmR4ID09PSAwKSB7XG4gICAgICAgICAgICBwcmVwZW5kKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmR4IDwgbGlzdFNpemUpIHtcbiAgICAgICAgICAgIGxldCBsZWZ0Tm9kZSA9IGhlYWQsIGNvdW50ZXIgPSAxO1xuICAgICAgICAgICAgd2hpbGUgKGNvdW50ZXIgPCBpbmR4KSB7XG4gICAgICAgICAgICAgICAgbGVmdE5vZGUgPSBoZWFkLmdldE5leHQoKTtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmV3Tm9kZSA9IGNyZWF0ZU5vZGUodmFsdWUpO1xuICAgICAgICAgICAgbmV3Tm9kZS5zZXROZXh0KGxlZnROb2RlLmdldE5leHQoKSk7XG4gICAgICAgICAgICBsZWZ0Tm9kZS5zZXROZXh0KG5ld05vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb3JyeSwgaW5kZXggaXMgZ3JlYXRlciB0aGFuIGxpc3Qgc2l6ZSFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHJlcHIgPSBcIlwiO1xuICAgICAgICBsZXQgZWxlbWVudCA9IGhlYWQ7IFxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXByICs9IFwibnVsbFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHJlcHIgKz0gZWxlbWVudC5nZXRWYWx1ZSgpICsgXCIgLT4gXCI7XG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5nZXROZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcHI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHthcHBlbmQsIHByZXBlbmQsIGdldFNpemUsIGdldEhlYWQsIGdldFRhaWwsIGVsZW1lbnRBdCwgcG9wLCB0b1N0cmluZywgaW5zZXJ0QXR9O1xufVxuXG5leHBvcnQge2NyZWF0ZUxpc3R9OyIsImZ1bmN0aW9uIGNyZWF0ZU5vZGUodmFsID0gbnVsbCwgbmV4dCA9IG51bGwpIHtcbiAgICBsZXQgdmFsdWUgPSB2YWw7XG4gICAgbGV0IG5leHROb2RlID0gbmV4dDtcbiAgICBcbiAgICBjb25zdCBzZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFsdWUgPSB2YWw7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXROZXh0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgbmV4dE5vZGUgPSBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXh0Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFZhbHVlLCBzZXRWYWx1ZSwgZ2V0TmV4dCwgc2V0TmV4dH07XG59XG5cbmV4cG9ydCB7Y3JlYXRlTm9kZX07IiwiZnVuY3Rpb24gY3JlYXRlVHJlZU5vZGUodmFsID0gbnVsbCwgbGVmdCA9IG51bGwsIHJpZ2h0ID0gbnVsbCkge1xuICAgIGxldCB2YWx1ZSA9IHZhbDtcbiAgICBsZXQgbGVmdE5vZGUgPSBsZWZ0O1xuICAgIGxldCByaWdodE5vZGUgPSByaWdodDtcblxuICAgIGNvbnN0IHNldFZhbHVlID0gZnVuY3Rpb24gKG5vZGVWYWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IG5vZGVWYWx1ZTtcbiAgICB9IFxuICAgIFxuICAgIGNvbnN0IGdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TGVmdCA9IGZ1bmN0aW9uICh0cmVlTm9kZSkge1xuICAgICAgICBsZWZ0Tm9kZSA9IHRyZWVOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExlZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsZWZ0Tm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRSaWdodCA9IGZ1bmN0aW9uICh0cmVlTm9kZSkge1xuICAgICAgICByaWdodE5vZGUgPSB0cmVlTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRSaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJpZ2h0Tm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCB0b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHZhbHVlICsgXCIgXCIgKyBsZWZ0Tm9kZS5nZXRWYWx1ZSgpICsgXCIgKEwpIFwiICsgcmlnaHROb2RlLmdldFZhbHVlKCkgKyBcIiAoUikgXCI7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRWYWx1ZSwgc2V0VmFsdWUsIGdldExlZnQsIHNldExlZnQsIGdldFJpZ2h0LCBzZXRSaWdodH07XG59XG5cbmV4cG9ydCB7Y3JlYXRlVHJlZU5vZGV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2xpbmtlZExpc3RcIjtcbmltcG9ydCB7IGNyZWF0ZVRyZWUgfSBmcm9tIFwiLi9iaW5hcnlUcmVlXCI7XG5cblxubGV0IG5ld0xpc3QgPSBjcmVhdGVMaXN0KCk7XG5uZXdMaXN0LmFwcGVuZCgxKTtcbm5ld0xpc3QuYXBwZW5kKDIpO1xubmV3TGlzdC5hcHBlbmQoMyk7XG5uZXdMaXN0LmFwcGVuZCg0KTtcbm5ld0xpc3QuYXBwZW5kKDUpO1xuY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbm5ld0xpc3QuaW5zZXJ0QXQoMiwgNik7XG5jb25zb2xlLmxvZyhuZXdMaXN0LnRvU3RyaW5nKCkpO1xubmV3TGlzdC5pbnNlcnRBdCgwLCA3KTtcbmNvbnNvbGUubG9nKG5ld0xpc3QudG9TdHJpbmcoKSk7XG5uZXdMaXN0Lmluc2VydEF0KDIsIDgpO1xuY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbi8vIGxldCBuZXdUcmVlID0gY3JlYXRlVHJlZSgpO1xuLy8gY29uc29sZS5sb2cobmV3VHJlZS5pbk9yZGVyKG5ld1RyZWUuZ2V0Um9vdCgpKSk7XG4vLyBuZXdUcmVlLmFwcGVuZChcIkZcIik7XG4vLyBjb25zb2xlLmxvZyhuZXdUcmVlLmluT3JkZXIobmV3VHJlZS5nZXRSb290KCkpKTtcbi8vIG5ld1RyZWUuYXBwZW5kKFwiRFwiKTtcbi8vIGNvbnNvbGUubG9nKG5ld1RyZWUuaW5PcmRlcihuZXdUcmVlLmdldFJvb3QoKSkpO1xuLy8gbmV3VHJlZS5hcHBlbmQoXCJKXCIpO1xuLy8gbmV3VHJlZS5hcHBlbmQoXCJCXCIpO1xuLy8gbmV3VHJlZS5hcHBlbmQoXCJFXCIpO1xuLy8gbmV3VHJlZS5hcHBlbmQoXCJHXCIpO1xuLy8gbmV3VHJlZS5hcHBlbmQoXCJLXCIpO1xuLy8gbmV3VHJlZS5hcHBlbmQoXCJBXCIpO1xuLy8gbmV3VHJlZS5hcHBlbmQoXCJDXCIpO1xuLy8gbmV3VHJlZS5hcHBlbmQoXCJJXCIpO1xuLy8gbmV3VHJlZS5hcHBlbmQoXCJIXCIpO1xuLy8gY29uc29sZS5sb2cobmV3VHJlZS5icmVhZHRoVHJhdmVyc2UobmV3VHJlZS5nZXRSb290KCkpKTtcbi8vIC8vIGNvbnNvbGUubG9nKG5ld1RyZWUuaW5PcmRlcihuZXdUcmVlLmdldFJvb3QoKSkpO1xuLy8gLy8gY29uc29sZS5sb2cobmV3VHJlZS5wcmVPcmRlcihuZXdUcmVlLmdldFJvb3QoKSkpO1xuLy8gLy8gY29uc29sZS5sb2cobmV3VHJlZS5wb3N0T3JkZXIobmV3VHJlZS5nZXRSb290KCkpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=