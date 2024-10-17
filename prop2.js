function sendNotification(email) {
    
    if(typeof email !== "string"){
        return "Invalid Email";
    }

    if(email.indexOf('@') === -1){
        return "Invalid Email";
    }

  const arrEmail = email.split('@');
  const userName = arrEmail[0]
  const domainName = arrEmail[1]

  
  const result = `${userName} sent you an email from ${domainName}`

  return result

}


// Sample test cases
console.log(sendNotification("zihad@gmail.com")); // zihad sent you an email from gmail.com
console.log(sendNotification("farhan34@yahoo.com")); // farhan34 sent you an email from yahoo.com
console.log(sendNotification("nadim.naem5@outlook.com")); // nadim.naem5 sent you an email from outlook.com
console.log(sendNotification("fahim234.hotmail.com")); // Invalid Email
console.log(sendNotification(0)); // Invalid Email