function distance(miles) {
    const covertDistance= miles*1.60934;
    return covertDistance;
}
const miles=2;
const resultKm=distance(miles);
console.log(resultKm.toFixed(2));
