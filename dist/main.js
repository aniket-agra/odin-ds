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
console.log(newList.pop());
console.log(newList.toString());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFEQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFEQUFVO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOzs7Ozs7OztVQ3JCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBDOztBQUUxQyxjQUFjLHVEQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1kcy8uL3NyYy9saW5rZWRMaXN0LmpzIiwid2VicGFjazovL29kaW4tZHMvLi9zcmMvbGlzdE5vZGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tZHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuL2xpc3ROb2RlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QoKSB7XG4gICAgbGV0IGhlYWQgPSBudWxsO1xuICAgIGxldCB0YWlsID0gaGVhZDtcbiAgICBsZXQgbGlzdFNpemUgPSAwO1xuXG4gICAgY29uc3QgYXBwZW5kID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGxldCBuZXdOb2RlID0gY3JlYXRlTm9kZSh2YWx1ZSk7XG4gICAgICAgIGlmIChoZWFkID09PSBudWxsKSB7XG4gICAgICAgICAgICBoZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIHRhaWwgPSBoZWFkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFpbC5zZXROZXh0KG5ld05vZGUpO1xuICAgICAgICAgICAgdGFpbCA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdFNpemUgKz0gMTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmVwZW5kID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGxldCBuZXdOb2RlID0gY3JlYXRlTm9kZSh2YWx1ZSwgaGVhZCk7XG4gICAgICAgIGhlYWQgPSBuZXdOb2RlO1xuICAgICAgICBsaXN0U2l6ZSArPSAxO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsaXN0U2l6ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRIZWFkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaGVhZDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYWlsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGFpbDtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50QXQgPSBmdW5jdGlvbiAoaW5keCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGhlYWQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGluZHg7IGkrKykge1xuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQuZ2V0TmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldFZhbHVlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAodGFpbCA9PT0gaGVhZCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGFpbDtcbiAgICAgICAgICAgIHRhaWwgPSBudWxsO1xuICAgICAgICAgICAgaGVhZCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGhlYWQ7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmdldE5leHQoKSA9PT0gdGFpbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5nZXROZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ID0gdGFpbDtcbiAgICAgICAgICAgIHRhaWwgPSBlbGVtZW50O1xuICAgICAgICAgICAgdGFpbC5zZXROZXh0KG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQuZ2V0VmFsdWUoKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHJlcHIgPSBcIlwiO1xuICAgICAgICBsZXQgZWxlbWVudCA9IGhlYWQ7IFxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXByICs9IFwibnVsbFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHJlcHIgKz0gZWxlbWVudC5nZXRWYWx1ZSgpICsgXCIgLT4gXCI7XG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5nZXROZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcHI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHthcHBlbmQsIHByZXBlbmQsIGdldFNpemUsIGdldEhlYWQsIGdldFRhaWwsIGVsZW1lbnRBdCwgcG9wLCB0b1N0cmluZ307XG59XG5cbmV4cG9ydCB7Y3JlYXRlTGlzdH07IiwiZnVuY3Rpb24gY3JlYXRlTm9kZSh2YWwgPSBudWxsLCBuZXh0ID0gbnVsbCkge1xuICAgIGxldCB2YWx1ZSA9IHZhbDtcbiAgICBsZXQgbmV4dE5vZGUgPSBuZXh0O1xuICAgIFxuICAgIGNvbnN0IHNldFZhbHVlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICB2YWx1ZSA9IHZhbDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldE5leHQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBuZXh0Tm9kZSA9IG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5leHROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0VmFsdWUsIHNldFZhbHVlLCBnZXROZXh0LCBzZXROZXh0fTtcbn1cblxuZXhwb3J0IHtjcmVhdGVOb2RlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUxpc3QgfSBmcm9tIFwiLi9saW5rZWRMaXN0XCI7XG5cbmxldCBuZXdMaXN0ID0gY3JlYXRlTGlzdCgpO1xubmV3TGlzdC5hcHBlbmQoMSk7XG5jb25zb2xlLmxvZyhuZXdMaXN0LnRvU3RyaW5nKCkpO1xubmV3TGlzdC5hcHBlbmQoMik7XG5jb25zb2xlLmxvZyhuZXdMaXN0LnRvU3RyaW5nKCkpO1xubmV3TGlzdC5hcHBlbmQoMyk7XG5jb25zb2xlLmxvZyhuZXdMaXN0LnRvU3RyaW5nKCkpO1xubmV3TGlzdC5wcmVwZW5kKDQpO1xuY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbmNvbnNvbGUubG9nKG5ld0xpc3QucG9wKCkpO1xuY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=