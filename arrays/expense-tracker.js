const account = {
    name: 'Mahmoud Dawood',
    expenses: [],
    income:[],
    addExpense: function(discription, amount){
        this.expenses.push({
            discription: discription,
            amount: amount,
        })
    },
    addIncome: function(discription, amount){
        this.income.push({
            discription: discription,
            amount: amount,
        })
    },
    accountGetSummary: function(){
        let sumOut = 0
        account.expenses.forEach(function(item){
            sumOut = sumOut + item.amount
        })
        let sumIn = 0
        this.income.forEach(function(item){
            sumIn = sumIn + item.amount
        })
         return `${this.name} has a balance of $${sumIn - sumOut}. $${sumIn} in income.$${sumOut} in expenses.`
    },
}





account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.accountGetSummary())
