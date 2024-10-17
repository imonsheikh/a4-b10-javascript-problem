function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || income < expenses) {
    return "Invalid Input";
  }

  let totalProfit = income - expenses;
  let tax = totalProfit * 0.2;

  let fixed = tax.toFixed(2);
  return fixed;
}


function sendNotification(email) {
  if (typeof email !== "string") {
    return "Invalid Email";
  }

  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }

  const arrEmail = email.split("@");
  const userName = arrEmail[0];
  const domainName = arrEmail[1];

  const result = `${userName} sent you an email from ${domainName}`;

  return result;
}


function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (let n = 0; n < name.length; n++) {
    if (!isNaN(name[n]) && name[n] !== " ") {
      return true;
    }
  }

  return false;
}


function calculateFinalScore(obj) {
  if (typeof obj !== "object" || Array.isArray(obj) || !obj) {
    return "Invalid Input";
  }

  const name = obj.name;
  const testScore = obj.testScore;
  const schoolGrade = obj.schoolGrade;
  const isFFamily = obj.isFFamily;

  if (
    typeof name !== "string" ||
    typeof testScore !== "number" ||
    typeof schoolGrade !== "number" ||
    typeof isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  if (50 < testScore || 30 < schoolGrade) {
    return "Invalid Input";
  }

  let finalScore = testScore + schoolGrade;

  if (isFFamily === true) {
    finalScore = finalScore + 20;
  }

  const result = finalScore >= 80;

  return result;
}


function waitingTime(waitingTimes, serialNumber) {
  if (typeof serialNumber !== "number" || !Array.isArray(waitingTimes)) {
    return "Invalid Input";
  }

  let sum = 0;
  for (const time of waitingTimes) {
    sum = sum + time;
  }

  const averageTime = Math.round(sum / waitingTimes.length);

  const remainPersons = serialNumber - waitingTimes.length - 1;

  let waitingTime = 0;
  if (remainPersons > 0) {
    waitingTime = remainPersons * averageTime;
  } else {
    waitingTime = 0;
  }

  return waitingTime;
}
