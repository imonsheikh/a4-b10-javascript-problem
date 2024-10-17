function waitingTime(waitingTimes, serialNumber) {
    if (typeof serialNumber !== 'number' || !Array.isArray(waitingTimes)) {
        return "Invalid Input";
    }

    let sum = 0; 
    for(const time of waitingTimes){
        sum = sum + time
    }

    const averageTime = Math.round(sum / waitingTimes.length);

    const remainPersons = serialNumber - waitingTimes.length - 1;

 

    let waitingTime = 0
    if(remainPersons > 0){
       waitingTime = remainPersons * averageTime
    }
    else{
        waitingTime = 0
    }

    return waitingTime;
}


