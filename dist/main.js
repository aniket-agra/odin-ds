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
        return inOrder(treeRoot.getLeft()) + " " + treeRoot.getValue() + " " + inOrder(treeRoot.getRight());
    }

    return {append, getRoot, inOrder};
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

    return {append, prepend, getSize, getHead, getTail, elementAt, pop, toString};
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



let newTree = (0,_binaryTree__WEBPACK_IMPORTED_MODULE_1__.createTree)();
console.log(newTree.inOrder(newTree.getRoot()));
newTree.append(2);
console.log(newTree.inOrder(newTree.getRoot()));
newTree.append(1);
console.log(newTree.inOrder(newTree.getRoot()));
newTree.append(3);
console.log(newTree.inOrder(newTree.getRoot()));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQix5REFBYztBQUNqQyxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHlEQUFjO0FBQ3REO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHlEQUFjO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ3dDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixxREFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixxREFBVTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7O1VDbkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ0E7O0FBRTFDLGNBQWMsdURBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWRzLy4vc3JjL2JpbmFyeVRyZWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy8uL3NyYy9saW5rZWRMaXN0LmpzIiwid2VicGFjazovL29kaW4tZHMvLi9zcmMvbGlzdE5vZGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy8uL3NyYy90cmVlTm9kZS5qcyIsIndlYnBhY2s6Ly9vZGluLWRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tZHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tZHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUcmVlTm9kZSB9IGZyb20gXCIuL3RyZWVOb2RlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRyZWUocm9vdE5vZGUgPSBudWxsKSB7XG4gICAgbGV0IHJvb3QgPSByb290Tm9kZTtcblxuICAgIGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcm9vdCA9IGNyZWF0ZVRyZWVOb2RlKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gcm9vdDtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIDwgY3VycmVudC5nZXRWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmdldExlZnQoKSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmdldExlZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50LnNldExlZnQoY3JlYXRlVHJlZU5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuZ2V0UmlnaHQoKSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmdldFJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudC5zZXRSaWdodChjcmVhdGVUcmVlTm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG5cbiAgICBjb25zdCBpbk9yZGVyID0gZnVuY3Rpb24gKHRyZWVSb290KSB7XG4gICAgICAgIGlmICh0cmVlUm9vdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluT3JkZXIodHJlZVJvb3QuZ2V0TGVmdCgpKSArIFwiIFwiICsgdHJlZVJvb3QuZ2V0VmFsdWUoKSArIFwiIFwiICsgaW5PcmRlcih0cmVlUm9vdC5nZXRSaWdodCgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2FwcGVuZCwgZ2V0Um9vdCwgaW5PcmRlcn07XG59XG5cbmV4cG9ydHtjcmVhdGVUcmVlfTsiLCJpbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4vbGlzdE5vZGVcIjtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdCgpIHtcbiAgICBsZXQgaGVhZCA9IG51bGw7XG4gICAgbGV0IHRhaWwgPSBoZWFkO1xuICAgIGxldCBsaXN0U2l6ZSA9IDA7XG5cbiAgICBjb25zdCBhcHBlbmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgbGV0IG5ld05vZGUgPSBjcmVhdGVOb2RlKHZhbHVlKTtcbiAgICAgICAgaWYgKGhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGFpbCA9IGhlYWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWlsLnNldE5leHQobmV3Tm9kZSk7XG4gICAgICAgICAgICB0YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0U2l6ZSArPSAxO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXBlbmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgbGV0IG5ld05vZGUgPSBjcmVhdGVOb2RlKHZhbHVlLCBoZWFkKTtcbiAgICAgICAgaGVhZCA9IG5ld05vZGU7XG4gICAgICAgIGxpc3RTaXplICs9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RTaXplO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEhlYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBoZWFkO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRhaWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0YWlsO1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRBdCA9IGZ1bmN0aW9uIChpbmR4KSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gaGVhZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gaW5keDsgaSsrKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5nZXROZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0VmFsdWUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmICh0YWlsID09PSBoZWFkKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0YWlsO1xuICAgICAgICAgICAgdGFpbCA9IG51bGw7XG4gICAgICAgICAgICBoZWFkID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gaGVhZDtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ2V0TmV4dCgpID09PSB0YWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LmdldE5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgPSB0YWlsO1xuICAgICAgICAgICAgdGFpbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB0YWlsLnNldE5leHQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdFNpemUgLT0gMTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5nZXRWYWx1ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcmVwciA9IFwiXCI7XG4gICAgICAgIGxldCBlbGVtZW50ID0gaGVhZDsgXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlcHIgKz0gXCJudWxsXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgcmVwciArPSBlbGVtZW50LmdldFZhbHVlKCkgKyBcIiAtPiBcIjtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LmdldE5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVwcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge2FwcGVuZCwgcHJlcGVuZCwgZ2V0U2l6ZSwgZ2V0SGVhZCwgZ2V0VGFpbCwgZWxlbWVudEF0LCBwb3AsIHRvU3RyaW5nfTtcbn1cblxuZXhwb3J0IHtjcmVhdGVMaXN0fTsiLCJmdW5jdGlvbiBjcmVhdGVOb2RlKHZhbCA9IG51bGwsIG5leHQgPSBudWxsKSB7XG4gICAgbGV0IHZhbHVlID0gdmFsO1xuICAgIGxldCBuZXh0Tm9kZSA9IG5leHQ7XG4gICAgXG4gICAgY29uc3Qgc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZhbHVlID0gdmFsO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TmV4dCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIG5leHROb2RlID0gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV4dE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRWYWx1ZSwgc2V0VmFsdWUsIGdldE5leHQsIHNldE5leHR9O1xufVxuXG5leHBvcnQge2NyZWF0ZU5vZGV9OyIsImZ1bmN0aW9uIGNyZWF0ZVRyZWVOb2RlKHZhbCA9IG51bGwsIGxlZnQgPSBudWxsLCByaWdodCA9IG51bGwpIHtcbiAgICBsZXQgdmFsdWUgPSB2YWw7XG4gICAgbGV0IGxlZnROb2RlID0gbGVmdDtcbiAgICBsZXQgcmlnaHROb2RlID0gcmlnaHQ7XG5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IGZ1bmN0aW9uIChub2RlVmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBub2RlVmFsdWU7XG4gICAgfSBcbiAgICBcbiAgICBjb25zdCBnZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldExlZnQgPSBmdW5jdGlvbiAodHJlZU5vZGUpIHtcbiAgICAgICAgbGVmdE5vZGUgPSB0cmVlTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMZWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbGVmdE5vZGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UmlnaHQgPSBmdW5jdGlvbiAodHJlZU5vZGUpIHtcbiAgICAgICAgcmlnaHROb2RlID0gdHJlZU5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByaWdodE5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgdG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB2YWx1ZSArIFwiIFwiICsgbGVmdE5vZGUuZ2V0VmFsdWUoKSArIFwiIChMKSBcIiArIHJpZ2h0Tm9kZS5nZXRWYWx1ZSgpICsgXCIgKFIpIFwiO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0VmFsdWUsIHNldFZhbHVlLCBnZXRMZWZ0LCBzZXRMZWZ0LCBnZXRSaWdodCwgc2V0UmlnaHR9O1xufVxuXG5leHBvcnQge2NyZWF0ZVRyZWVOb2RlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUxpc3QgfSBmcm9tIFwiLi9saW5rZWRMaXN0XCI7XG5pbXBvcnQgeyBjcmVhdGVUcmVlIH0gZnJvbSBcIi4vYmluYXJ5VHJlZVwiO1xuXG5sZXQgbmV3VHJlZSA9IGNyZWF0ZVRyZWUoKTtcbmNvbnNvbGUubG9nKG5ld1RyZWUuaW5PcmRlcihuZXdUcmVlLmdldFJvb3QoKSkpO1xubmV3VHJlZS5hcHBlbmQoMik7XG5jb25zb2xlLmxvZyhuZXdUcmVlLmluT3JkZXIobmV3VHJlZS5nZXRSb290KCkpKTtcbm5ld1RyZWUuYXBwZW5kKDEpO1xuY29uc29sZS5sb2cobmV3VHJlZS5pbk9yZGVyKG5ld1RyZWUuZ2V0Um9vdCgpKSk7XG5uZXdUcmVlLmFwcGVuZCgzKTtcbmNvbnNvbGUubG9nKG5ld1RyZWUuaW5PcmRlcihuZXdUcmVlLmdldFJvb3QoKSkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==