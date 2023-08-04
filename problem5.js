var fruits= ['Apple','Banana', 'orange']

// a) find the index of banana and replace banana with mango
// console.log(fruits);
console.log(fruits. indexOf('Banana'));
fruits[1]="mango";
console.log(fruits);

// b)Remove orange and add watermelon 
fruits.pop();
console.log(fruits);
fruits.push('watermelon');
console.log(fruits);