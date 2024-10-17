

function calculateTax(income, expenses) {

if(income < 0 || expenses < 0 || income < expenses){
   return "Invalid Input"
}

let totalProfit = income - expenses
let tax = totalProfit * 0.20

let fixed = tax.toFixed(2)
return fixed
}






console.log(calculateTax(10000, 3000));  // Output: 1400
console.log(calculateTax(34000, 1753));  // Output: 6449.400000000001
console.log(calculateTax(5000, 1500));   // Output: 700
console.log(calculateTax(7000, 7000));   // Output: 0
console.log(calculateTax(-5000, 2000));  // Output: Invalid Input
console.log(calculateTax(6000, -1500));

console.log(calculateTax(15000, 5000));   // Output: 2000 (15000 - 5000 = 10000 * 20%)
console.log(calculateTax(20000, 5000));   // Output: 3000 (20000 - 5000 = 15000 * 20%)
console.log(calculateTax(50000, 20000));  // Output: 6000 (50000 - 20000 = 30000 * 20%)
console.log(calculateTax(1000, 500));     // Output: 100 (1000 - 500 = 500 * 20%)
console.log(calculateTax(6000, 5000));    // Output: 200 (6000 - 5000 = 1000 * 20%)
console.log(calculateTax(5000, 0));       // Output: 1000 (5000 - 0 = 5000 * 20%)
console.log(calculateTax(5000, 5000)); 
console.log(calculateTax(0, 0));          // Output: 0 (0 - 0 = 0 * 20%)
console.log(calculateTax(1000, 1200));    // Output: Invalid Input (expense > income)
console.log(calculateTax(-1000, 500));    // Output: Invalid Input (negative income)
console.log(calculateTax(1000, -500)); 