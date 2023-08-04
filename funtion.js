// function myFun(fun) {
//     console.log(fun);
// }
// myFun(23);
// function addingSum(num1, num2) {
//     return num1+num2;
// }
// var mySum=addingSum(23,12)
// console.log(mySum);

// // function foo(){
// //     console.log("foo");
// //     // bar();
// // }
// // foo();

// function bar() {
//    console.log("bar");
//    foo();
    
// }
// bar();

function makeAvg(num1,num2,num3) {
    var total=(num1+num2+num3);
    var avg=(total/3);
    return avg;
}
var finalAvg=makeAvg(60,60,60);
 console.log(finalAvg);


//  CHELANGE TASK 

function makeAvg(arr) {
    var sum=  0;
    for (var i = 0; i < arr.length; i++) {
     sum += arr[i];
     
    }
    var avg= sum/arr.length;
    return avg;
}

var numbers=[40, 90, 30, 60, 90]
var avg=makeAvg(numbers);
console.log("avareg: ", avg);

// Has  return Has perameter 
function odd_even(num) {
    if (num%2==0) {
        console.log(num +" is Even");
    }
    else{
        console.log( num + " is odd");
    }
}
var num= 999;
 var output=odd_even(num);
//  function odd_even(a) {
//     var sum= a%2;
//     return sum;
//  }
//  var even=odd_even(23);
//  console.log(even);

// var signal= "yellow";
// if (signal =="green") {
//      console.log("you should cross the road");
// }
// else if (signal== "red") {
//     console.log("you may be in danger")
// }
// else if (signal == "yellow") {
//     console.log("you should stop");
    
// }
// else{
//     console.log("there is no traffic signal");
// }

// switch case 
var signal="green";
switch (signal) {
    case "green":
        console.log("you should cross the road");
        break;
    case "yellow":
        console.log("you should stop");
        break;
    case "red":
        console.log("you may be danger");
    default:
        console.log("there is no traffic");
        break;
}