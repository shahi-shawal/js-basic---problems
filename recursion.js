function sumOfNum(num){
    if (typeof(num) !== "number") {
        return "please provide me a number"
    }
   if (num===1) {
    return 1;
   }
   else{
    return num * sumOfNum(num-1);
   }
}

let num= 5;
console.log(sumOfNum(num));