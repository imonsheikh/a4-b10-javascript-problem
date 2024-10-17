function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }

    for (let n = 0; n < name.length; n++) {
        if (!isNaN(name[n]) && name[n] !== ' ') {
            return true;  
        }
    }

    return false;
}

// Sample test cases
console.log(checkDigitsInName("Raj123"));   // true
console.log(checkDigitsInName("n9ayeem"));  // true
console.log(checkDigitsInName("e1mu3"));    // true
console.log(checkDigitsInName("Suman"));    // false
console.log(checkDigitsInName("Name2024")); // true
console.log(checkDigitsInName("!@#"));      // false
console.log(checkDigitsInName(["Raj"]));    // Invalid Input
