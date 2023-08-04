var shoppinfCart = {
    book:3,
    sunglass:4,
    mouse:1,
    tometo:3
}

console.log(shoppinfCart.book);
console.log(shoppinfCart ["sunglass"]);

var keys= Object.keys(shoppinfCart);
console.log(keys);
var values= Object.values(shoppinfCart);
console.log(values);

for (let i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValues= shoppinfCart[propertyName]
    console.log(propertyName);
    console.log(propertyValues);
}

// set propertyvalue 
shoppinfCart.mouse=10;
console.log(shoppinfCart);