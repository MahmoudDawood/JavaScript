let myAccount = {
    name: 'Mahmoud',
    expense: 0,
    income: 0,
}

let addIncome = function(account, amount){
    account.income = account.income + amount
}

let addExpense = function(account, amount){
    account.expense = account.expense + amount
}

let resetAccount = function(account){
    account.income = 0
    account.expense = 0
}

let getAccountSummary = function(account){
    console.log(`Account for ${account.name} has $${account.income - account.expense}. $${account.income} in income. $${account.expense} in expense`)
}


addIncome(myAccount, 2000)
addExpense(myAccount, 2.5)
addExpense(myAccount, 160)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)