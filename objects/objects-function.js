
let readTemprature = function(fahrenheit){
    return{
        fahrenheit: fahrenheit,
        celisius: ( fahrenheit - 32) * (5 / 9),
        kelvin: (fahrenheit + 459.67) * (5 / 9),
    }
}

console.log(readTemprature(74))