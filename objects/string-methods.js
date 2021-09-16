let isValidPasssword = function(password){
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPasssword('afsdf'))
console.log(isValidPasssword('faksjhdfpiasdfba9'))
console.log(isValidPasssword('dfssdfsdfpassword'))