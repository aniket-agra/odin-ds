/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

    return {append, prepend, getSize, getHead, getTail, elementAt, toString};
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


let newList = (0,_linkedList__WEBPACK_IMPORTED_MODULE_0__.createList)();
newList.append(1);
console.log(newList.toString());
newList.append(2);
console.log(newList.toString());
newList.append(3);
console.log(newList.toString());
newList.prepend(4);
console.log(newList.toString());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFEQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFEQUFVO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7Ozs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUMsY0FBYyx1REFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1kcy8uL3NyYy9saW5rZWRMaXN0LmpzIiwid2VicGFjazovL29kaW4tZHMvLi9zcmMvbGlzdE5vZGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tZHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuL2xpc3ROb2RlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QoKSB7XG4gICAgbGV0IGhlYWQgPSBudWxsO1xuICAgIGxldCB0YWlsID0gaGVhZDtcbiAgICBsZXQgbGlzdFNpemUgPSAwO1xuXG4gICAgY29uc3QgYXBwZW5kID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGxldCBuZXdOb2RlID0gY3JlYXRlTm9kZSh2YWx1ZSk7XG4gICAgICAgIGlmIChoZWFkID09PSBudWxsKSB7XG4gICAgICAgICAgICBoZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIHRhaWwgPSBoZWFkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFpbC5zZXROZXh0KG5ld05vZGUpO1xuICAgICAgICAgICAgdGFpbCA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdFNpemUgKz0gMTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmVwZW5kID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGxldCBuZXdOb2RlID0gY3JlYXRlTm9kZSh2YWx1ZSwgaGVhZCk7XG4gICAgICAgIGhlYWQgPSBuZXdOb2RlO1xuICAgICAgICBsaXN0U2l6ZSArPSAxO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsaXN0U2l6ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRIZWFkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaGVhZDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYWlsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGFpbDtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50QXQgPSBmdW5jdGlvbiAoaW5keCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGhlYWQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGluZHg7IGkrKykge1xuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQuZ2V0TmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldFZhbHVlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCByZXByID0gXCJcIjtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBoZWFkOyBcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVwciArPSBcIm51bGxcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICByZXByICs9IGVsZW1lbnQuZ2V0VmFsdWUoKSArIFwiIC0+IFwiO1xuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQuZ2V0TmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXByO1xuICAgIH1cblxuICAgIHJldHVybiB7YXBwZW5kLCBwcmVwZW5kLCBnZXRTaXplLCBnZXRIZWFkLCBnZXRUYWlsLCBlbGVtZW50QXQsIHRvU3RyaW5nfTtcbn1cblxuZXhwb3J0IHtjcmVhdGVMaXN0fTsiLCJmdW5jdGlvbiBjcmVhdGVOb2RlKHZhbCA9IG51bGwsIG5leHQgPSBudWxsKSB7XG4gICAgbGV0IHZhbHVlID0gdmFsO1xuICAgIGxldCBuZXh0Tm9kZSA9IG5leHQ7XG4gICAgXG4gICAgY29uc3Qgc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZhbHVlID0gdmFsO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TmV4dCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIG5leHROb2RlID0gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV4dE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRWYWx1ZSwgc2V0VmFsdWUsIGdldE5leHQsIHNldE5leHR9O1xufVxuXG5leHBvcnQge2NyZWF0ZU5vZGV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2xpbmtlZExpc3RcIjtcblxubGV0IG5ld0xpc3QgPSBjcmVhdGVMaXN0KCk7XG5uZXdMaXN0LmFwcGVuZCgxKTtcbmNvbnNvbGUubG9nKG5ld0xpc3QudG9TdHJpbmcoKSk7XG5uZXdMaXN0LmFwcGVuZCgyKTtcbmNvbnNvbGUubG9nKG5ld0xpc3QudG9TdHJpbmcoKSk7XG5uZXdMaXN0LmFwcGVuZCgzKTtcbmNvbnNvbGUubG9nKG5ld0xpc3QudG9TdHJpbmcoKSk7XG5uZXdMaXN0LnByZXBlbmQoNCk7XG5jb25zb2xlLmxvZyhuZXdMaXN0LnRvU3RyaW5nKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==