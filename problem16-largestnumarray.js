function largestNumber(number) {
    // let largest=number[0];
    let lowest=number[0];
    for (let i = 0; i < number.length; i++) {
        const largestnum = number[i];
       if (largestnum < lowest) {
            // theNumIs.push(largestnum)
            // largest=largestnum;
            lowest=largestnum;
       }
       continue;
    }
    // console.log(largest);
    return lowest;
}

const num=[];

for (let i = 0; i <6; i++) {
   let randomArray= Math.round(Math.random()*100);
   console.log("New array is "+ randomArray);
   num.push(randomArray);
        
}
    let result=largestNumber(num);
    console.log(result);