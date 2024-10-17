function calculateTax(income, expenses) {
    // Validate inputs using !
    if (!(income >= 0 && expenses >= 0 && income >= expenses)) {
        return "Invalid Input";
    }
    
    // Calculate the tax
    let taxableIncome = income - expenses;
    let tax = taxableIncome * 0.20;
    
    return tax;
}

// Test cases with console.log for validation
console.log(calculateTax(15000, 5000));   // Output: 2000
console.log(calculateTax(20000, 5000));   // Output: 3000
console.log(calculateTax(50000, 20000));  // Output: 6000
console.log(calculateTax(1000, 500));     // Output: 100
console.log(calculateTax(6000, 5000));    // Output: 200
console.log(calculateTax(5000, 0));       // Output: 1000
console.log(calculateTax(5000, 5000));    // Output: 0

// Edge cases
console.log(calculateTax(0, 0));          // Output: 0
console.log(calculateTax(1000, 1200));    // Output: Invalid Input
console.log(calculateTax(-1000, 500));    // Output: Invalid Input
console.log(calculateTax(1000, -500));    // Output: Invalid Input
