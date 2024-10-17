function calculateFinalScore(obj){
    
    // validation 
    if(typeof obj !== "object" || Array.isArray(obj)){
        return "Invalid Input" 
    }


    let totalScore = obj.testScore + obj.schoolGrade
    if(obj.isFFamily){
        totalScore += 20
    }
    return totalScore >= 80? true : false
}


// test 
console.log(calculateFinalScore(
    {
    name: "RAjib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true
}
));
console.log(calculateFinalScore(
    {
    name: "RAjib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false
}
));
console.log(calculateFinalScore(
    {
    name: "RAjib",
    testScore: 45,
    schoolGrade: 2,
    isFFamily: true
}
));
console.log(calculateFinalScore(
    {
    name: "RAjib",
    testScore: 50,
    schoolGrade: 30,
    isFFamily: true
}
));

console.log(calculateFinalScore("hello"));

