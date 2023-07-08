import { createList } from "./linkedList";

let newList = createList();
newList.append(1);
console.log(newList.toString());
newList.append(2);
console.log(newList.toString());
newList.append(3);
console.log(newList.toString());
newList.prepend(4);
console.log(newList.toString());