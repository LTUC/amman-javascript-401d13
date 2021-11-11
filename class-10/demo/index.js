const Stack = require('./stack/Stack');


const newStack = new Stack();


newStack.push(1);
newStack.push(2);
newStack.push(3);

console.log(newStack.peek()); // 3
newStack.pop();
newStack.pop();
console.log(newStack.peek()); // 2
newStack.pop();
newStack.pop(); // should console log the error message