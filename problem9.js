function evenOdd(number) {
   const evenOddNumber= number%2;
   if (evenOddNumber==0) {
    console.log("This is Even Number");
    // return true 
   }
   else{
    console.log("this is odd number");
    // return false 
   }
   return evenOddNumber;
}
 const number= 100;
 const result=evenOdd(number)
//  console.log(result);