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
        for (let i = 0; i <= indx; i++) {
            element = element.getNext();
        }
        return element;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFEQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFEQUFVO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7O1VDckJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7O0FBRTFDLGNBQWMsdURBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tZHMvLi9zcmMvbGlua2VkTGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLWRzLy4vc3JjL2xpc3ROb2RlLmpzIiwid2VicGFjazovL29kaW4tZHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1kcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWRzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi9saXN0Tm9kZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0KCkge1xuICAgIGxldCBoZWFkID0gbnVsbDtcbiAgICBsZXQgdGFpbCA9IGhlYWQ7XG4gICAgbGV0IGxpc3RTaXplID0gMDtcblxuICAgIGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBsZXQgbmV3Tm9kZSA9IGNyZWF0ZU5vZGUodmFsdWUpO1xuICAgICAgICBpZiAoaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaGVhZCA9IG5ld05vZGU7XG4gICAgICAgICAgICB0YWlsID0gaGVhZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhaWwuc2V0TmV4dChuZXdOb2RlKTtcbiAgICAgICAgICAgIHRhaWwgPSBuZXdOb2RlO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RTaXplICs9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgcHJlcGVuZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBsZXQgbmV3Tm9kZSA9IGNyZWF0ZU5vZGUodmFsdWUsIGhlYWQpO1xuICAgICAgICBoZWFkID0gbmV3Tm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbGlzdFNpemU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGhlYWQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFpbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRhaWw7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudEF0ID0gZnVuY3Rpb24gKGluZHgpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBoZWFkO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBpbmR4OyBpKyspIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LmdldE5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCB0b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHJlcHIgPSBcIlwiO1xuICAgICAgICBsZXQgZWxlbWVudCA9IGhlYWQ7IFxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXByICs9IFwibnVsbFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHJlcHIgKz0gZWxlbWVudC5nZXRWYWx1ZSgpICsgXCIgLT4gXCI7XG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5nZXROZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcHI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHthcHBlbmQsIHByZXBlbmQsIGdldFNpemUsIGdldEhlYWQsIGdldFRhaWwsIGVsZW1lbnRBdCwgdG9TdHJpbmd9O1xufVxuXG5leHBvcnQge2NyZWF0ZUxpc3R9OyIsImZ1bmN0aW9uIGNyZWF0ZU5vZGUodmFsID0gbnVsbCwgbmV4dCA9IG51bGwpIHtcbiAgICBsZXQgdmFsdWUgPSB2YWw7XG4gICAgbGV0IG5leHROb2RlID0gbmV4dDtcbiAgICBcbiAgICBjb25zdCBzZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFsdWUgPSB2YWw7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXROZXh0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgbmV4dE5vZGUgPSBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXh0Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFZhbHVlLCBzZXRWYWx1ZSwgZ2V0TmV4dCwgc2V0TmV4dH07XG59XG5cbmV4cG9ydCB7Y3JlYXRlTm9kZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVMaXN0IH0gZnJvbSBcIi4vbGlua2VkTGlzdFwiO1xuXG5sZXQgbmV3TGlzdCA9IGNyZWF0ZUxpc3QoKTtcbm5ld0xpc3QuYXBwZW5kKDEpO1xuY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbm5ld0xpc3QuYXBwZW5kKDIpO1xuY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbm5ld0xpc3QuYXBwZW5kKDMpO1xuY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZygpKTtcbm5ld0xpc3QucHJlcGVuZCg0KTtcbmNvbnNvbGUubG9nKG5ld0xpc3QudG9TdHJpbmcoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9