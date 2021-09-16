

let tempConversion = function (fahrenheit) {
    let celisius = (fahrenheit - 32) * (5 / 9)
    return celisius
}

let fahrenheit = 32 //0c , 273.15k
console.log(tempConversion(fahrenheit))

fahrenheit = 68 //0c , 273.15k
console.log(tempConversion(fahrenheit))