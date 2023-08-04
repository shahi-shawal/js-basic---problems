 function findLeapYear(year) {
    // validation
    if (!Array.isArray(year)) {
        return "please provide me array";
    }
    // 
    let leapYear=[];
    let noleapYear=[];
    for (let item of year) {
        let leap = item;
        if (leap%4===0 && leap%100!==0 || leap%400===0) {
            leapYear.push(leap);
        }
        else{
            noleapYear.push(leap);
        }
    }
    let result={
        thisYearIsleapYear:leapYear,
        thisYearIsNoYear: noleapYear
    }
    return result;
 }


let year=[2023, 2024, 2025, 2026,2027];
let result=findLeapYear(year);
console.log(result);

// console.log(result.thisYearIsNoYear);
// console.log(result.thisYearIsleapYear);