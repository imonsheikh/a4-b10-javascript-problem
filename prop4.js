function calculateFinalScore(obj) {
  // Check if the input is an object
  if (typeof obj !== 'object' || Array.isArray(obj) || !obj) {
      return "Invalid Input";
  }

  const name = obj.name
  const testScore = obj.testScore
  const schoolGrade = obj.schoolGrade
  const isFFamily = obj.isFFamily


  if (
      typeof name !== 'string' ||
      typeof testScore !== 'number' ||
      typeof schoolGrade !== 'number' ||
      typeof isFFamily !== 'boolean'
  ) {
      return "Invalid Input";
  }

  if ( 50 < testScore ||  30 < schoolGrade) {
      return "Invalid Input";
  }

  let finalScore = testScore + schoolGrade;

  if (isFFamily === true) {
      finalScore = finalScore + 20;
  }
 
  const result = finalScore >= 80

  return result
  
}

// Sample test cases
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));  // true
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false })); // false
console.log(calculateFinalScore("hello"));  // Invalid Input
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }));  // false

console.log(calculateFinalScore({ name: "Rajib", testScore: 50, schoolGrade: 30, isFFamily: false }));  // true (50 + 30 = 80)
console.log(calculateFinalScore({ name: "Rajib", testScore: 40, schoolGrade: 30, isFFamily: true }));   // true (40 + 30 + 20 = 90)
console.log(calculateFinalScore({ name: "Rajib", testScore: 30, schoolGrade: 30, isFFamily: false }));  // false (30 + 30 = 60)
console.log(calculateFinalScore({ name: "Rajib", testScore: 35, schoolGrade: 30, isFFamily: true }));   // true (35 + 30 + 20 = 85)
console.log(calculateFinalScore({ name: "Rajib", testScore: 20, schoolGrade: 25, isFFamily: true }));   // false (20 + 25 + 20 = 65)

// Test cases with incorrect types or invalid inputs
console.log(calculateFinalScore({ name: 123, testScore: 45, schoolGrade: 25, isFFamily: true }));       // Invalid Input (name should be a string)
console.log(calculateFinalScore({ name: "Rajib", testScore: "45", schoolGrade: 25, isFFamily: true }));  // Invalid Input (testScore should be a number)
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: "25", isFFamily: true }));  // Invalid Input (schoolGrade should be a number)
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: "true" }));  // Invalid Input (isFFamily should be a boolean)

// Test cases with score out of range
console.log(calculateFinalScore({ name: "Rajib", testScore: 55, schoolGrade: 25, isFFamily: true }));    // Invalid Input (testScore > 50)
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 35, isFFamily: true }));    // Invalid Input (schoolGrade > 30)

// Test cases with non-object inputs
console.log(calculateFinalScore("hello"));                                                              // Invalid Input
console.log(calculateFinalScore(123));                                                                  // Invalid Input
console.log(calculateFinalScore([name = "Rajib", testScore = 45, schoolGrade = 25, isFFamily = true]));  // Invalid Input
console.log(calculateFinalScore(null)); 
