class Person{
    constructor(firstName, lastName, age, likes =[]){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio(){
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }

    set fullName(fullName){
        const name = fullName.split(' ')
        this.firstName = name[0]
        this.lastName = name[1]
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Student extends Person{
    constructor(firstName, lastName, age, grade, likes =[]){
        super(firstName, lastName, age, likes =[])
        
        this.grade = grade
    }
    getBio(){
        let bio = `${this.fullName} is `
        this.grade > 70 ? bio += 'passing' : bio += 'failing'
        bio += ` the class with a ${this.grade} grade.`
        return bio
    }

    updateGrade(amount){
        this.grade += amount
    }
}



const me = new Student('Mahmoud', 'Hassan', 24, 68, ['Moving', 'Studying'])
me.fullName = 'Mahmoud Dawood'
console.log(me.getBio())
me.updateGrade(3)
console.log(me.getBio())
