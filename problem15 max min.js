function maxnumber(num1, num2, num3) {
    if (num1 > num2 && num1>num3) {
        console.log("The largest number is "+ num1);
    }
    else if (num2>num1 && num2>num3) {
        console.log("The largest number is "+ num2);
    }
    else{
        console.log("The largest number is "+ num3);
    }
}

let num= maxnumber(13, 223, 56);

let maxinumber=Math.max(23,222,24)
let minnumber=Math.min(23,222,24)

console.log(maxinumber);
console.log(minnumber);