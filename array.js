var numbers=[30, 33, 44, 77, 69]

console.log(numbers. length);
// get element by index 
console.log(numbers[4]);

// set element value by index
numbers[4]=22;
console.log(numbers);

// Find index of an element 
var positionIndex= numbers.indexOf(33);
console.log(positionIndex);


// push kra - new elements add to array
numbers.push(50);
console.log(numbers);

// pop remove the last elements of array 
numbers.pop();
console.log(numbers);
var element=numbers.pop();
console.log(element);

// add element in the begining
numbers.unshift(99);
console.log(numbers);
// remove element in the begining
numbers.shift(99);
console.log(numbers);
