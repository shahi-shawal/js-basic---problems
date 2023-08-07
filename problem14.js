//problem: Tumi ekta function banabe jar nam hbe barbieKen .eta input hisebe ekta string nibe. task hcce function e string e total koita character  ache tar opor vitti kre console output korbe .ekn lenth jdi even hy out put hbe hi ken ar odd hle hi barbie 

function barbieKen(string) {
     let totalCharacter= string.length;
     console.log("Total Character is "+ totalCharacter); 

     if (totalCharacter%2==0) {
       console.log("Hi ken");
     }
     else{
        console.log("Hi barbie");

     }
     
}

const stg="Shawalshahi";
const result= barbieKen(stg);

 
//  output:Total Character is 11
//         Hi barbie
  