import { createNode } from "./listNode";

function createList() {
    let head = null;
    let tail = head;
    let listSize = 0;

    const append = function (value) {
        let newNode = createNode(value);
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
        let newNode = createNode(value, head);
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
            let newNode = createNode(value);
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

export {createList};