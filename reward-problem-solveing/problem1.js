function calculateTax(income, expense){

    // validation 
    if(income < 0 || expense < 0 || expense > income){
        return 'Invalid input'
    }

    let saving = income - expense
    let tax = saving  * 0.20
    return tax
}


// Test problem 1
console.log(calculateTax(10000,3000));
console.log(calculateTax(34000,1753));
console.log(calculateTax(5000,1500));
console.log(calculateTax(7000,7000));
console.log(calculateTax(-5000,2000));
console.log(calculateTax(6000,-1500));
