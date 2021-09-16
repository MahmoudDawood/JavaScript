let calculateTip = function(total, tip = .2){
    return total * tip
}

let result = calculateTip(100, .1)
console.log(result)

result = calculateTip(100)
console.log(result)

////////////////////////////////////////////

let calculateTip2 = function(total, tip = .2){
    return `A ${tip * 100}% on $${total} would be $${total * tip}`
}

result = calculateTip2(100, .1)
console.log(result)