// Finding largest number 
var num1=13;
var num2=79;
var num3=45;

if (num1>= 13 && num1>=79 && num1>=45) {
    console.log(num1 + "is largest number");
}
else if (num2>=13 && num2>=79 && num2>=45) {
    console.log(num2 + "is largest number");
}
else if (num3>=13 && num3>=79 && num3>=45) {
    console.log("num3 is largest number");
}
else{
    console.log("all is equal");
}

// Three given numbers
// var num1 = 13;
// var num2 = 79;
// var num3 = 45;

// // Finding the largest number using if-else
// if (num1 >= num2 && num1 >= num3) {
//     console.log(num1 + " is the largest number");
// } else if (num2 >= num1 && num2 >= num3) {
//     console.log(num2 + " is the largest number");
// } else {
//     console.log(num3 + " is the largest number");
// }


// 2)You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

var a=9;
var b=8;
var c=9;

if (a==b || b==c || a==c ) {
    console.log("is isosceles");
    
}

else{
    console.log("is not Isosceles");
}