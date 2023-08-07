//problem: ekti function likte hbe  function er nam hbe takaToDollar .ekn tomake ekti sonkka nite hbe  perameter hisebe za tk k dollar e convert kore return krte hbe  ebong kto hy seta console e deka te hbe

function takaToDollar(num) {
    const dollar= num / 110;
    return dollar;
}

const taka=33320;
const result=takaToDollar(taka);
console.log(result .toFixed(2));


let self={
    name: "shawal",
    age:23,
    address: "Chattogram"
}

self.address= "chittagong";
console.log(self);
// output: { name: 'shawal', age: 23, address: 'chittagong' }

