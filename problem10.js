function convertMinutes(hour) {
    const minutes= hour * 60;
    return minutes;
}

const hour=24;
const minutes=convertMinutes(hour);
console.log(minutes,'minutes');