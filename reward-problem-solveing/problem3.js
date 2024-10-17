function checkDigitsName(name){
    // valadition 
    if(typeof name !== "string"){
        return "Invalid Input"
    }
 
    let nameArr = name.split('')
    console.log(nameArr);
    
    for(const char of nameArr){

        //Method 1 => this is not best way.Because when name will be string in array like word
        // if(typeof char === 'number'){
        //     return true
        // }

        // Method2 
        // if(isNaN(char) === false){
        //     return true
        // }

        // Method 3
        if(!isNaN(char)){
            return true
        }
    }

    return false
}


// test 
console.log(checkDigitsName("Raj123"));
console.log(checkDigitsName("usm"));
console.log(checkDigitsName(["ral"]));
console.log(checkDigitsName({}));
console.log(checkDigitsName("4932341`$"));
