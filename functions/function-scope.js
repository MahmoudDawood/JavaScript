

let tempConversion = function (fahrenheit) {
    let celisius = (fahrenheit - 32) * (5 / 9)
    if(celisius <= 0){
        let isFreezing = true
    }
    return celisius
}

let fahrenheit = 32
console.log(tempConversion(fahrenheit))

fahrenheit = 68
console.log(tempConversion(fahrenheit))