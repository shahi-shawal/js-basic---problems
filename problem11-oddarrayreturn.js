function findOddSum(array) {
    const getArray=[];
    for (let i = 0; i < array.length; i++) {
        const odd = array[i];
        if (odd % 2 ===1) {
            // console.log(odd);
            getArray.push(odd)
        }

    }
    return getArray;
}

const oddNumber=[5,7,8,10,45,30];
const getArray= findOddSum(oddNumber);
console.log(getArray);
