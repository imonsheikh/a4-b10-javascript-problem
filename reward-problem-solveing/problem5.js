function waitingTime(waitingTimes, serialNumber){

    //validation
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
        return "Invalid input"
    }

    //calculate average time
    let sum = 0;
    for(const time of waitingTimes){
        sum += time
    }

    let averageTime = Math.round(sum / waitingTimes.length) 
    let personLeft = (serialNumber - 1) - waitingTimes.length

    return personLeft * averageTime
}


//Test problem 5
console.log(waitingTime([3,5,7,11,6], 10));
console.log(waitingTime([13,2], 6));
console.log(waitingTime(5,7));
