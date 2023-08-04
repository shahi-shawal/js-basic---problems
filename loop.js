// 1. dispaly aj k amr mon valo nai 39 times
// var display =0;
// while (display<39) {
//     console.log("aj ke amar mon valo nai")
//      display++;
    
// }
// 2.display number beetween 58 to 98 
// var i=58;
// while (i <= 98) {
//     console.log(i);
//      i++;
    
// }

// 3. show all even numbers from 412 t0 456
// var even =412;
// while (even<=456) {
//     console.log(even);
//     even= even +2;
    
// }

// 4.show all odd numbers  from 581 to 623 
// var odd = 581;
// while (odd<=613) {
//     console.log(odd);
//     odd= odd +2;
    
// }

// 5. Difference between while lopp and for loop
//  var i=0;
//  while (i<7) {
//     console.log(i);
//     i++
    
//  }

//  for (let i = 0; i < array.length; i++) {
//     console.log(i);
//     i++;
    
//  }

// 6. declar the array for all the topics that you have learned last few days and display the output

var topics=['HTML', "CSS", "Taliwind", "daisy", "js", "variable", "array", "loop" ];

// for (var i =0; i < topics.length; i++) {
    
//     console.log(i);

//     var l= topics[i];
//     console.log(l);
//     or
//     console.log(topics[i]);

  
    
// }

for (let i = 0; i < topics.length; i++) {
    var web= topics[i];
    if (web== "js") {
        // break;
        continue;
    }
    console.log(web);
    
}

var mobilePhone=['nokia', 'samsumg', 'mi', 'iphione', 'vivo', 'mi8lite'];
var i=0
while (i<mobilePhone.length) {
          console.log(mobilePhone[i]);
          i++;
}
