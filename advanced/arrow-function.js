const people = [
    {
        name: 'Zeko',
        age: 23
    },
    {
        name: 'Don',
        age: 48
    },
    {
        name: 'Dude',
        age: 22
    }
]

const result = people.find((person) => person.age === 22)
console.log(result.name)