function sendNotification(email){
    //system1
    if(email.split('').indexOf('@') === -1){
        return "Invalid Email"
    }

    // system2
    // if(email.split('').includes('@') === false){
    //     return "Invalid Email"
    // }

    let emailArr = email.split('@')
    let notification = `${emailArr[0]} sent you an email from ${emailArr[1]}`

    return notification
}

console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('zihadgmail.com'));
console.log(sendNotification('zihad%#4353Q$ gmail.com'));


