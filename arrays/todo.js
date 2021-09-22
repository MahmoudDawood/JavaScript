const todos = [{
    text: 'Study js arrays',
    completed: true,
}, {
    text: 'Meditate',
    completed: false,
}, {
    text: 'Travel to Monofiya',
    completed: true,
}, {
    text: 'See grandma',
    completed: true,
}, {
    text: 'Read before sleep',
    completed: false
}]

const deleteTodo = function(arr, item){
    const index = arr.findIndex(function(todo){
        return todo.text.toLowerCase() === item.toLowerCase()
    })
    if(index > -1){
        todos.splice(index, 1)
    }
}
deleteTodo(todos, 'Study JS arrays')
console.log(todos)
console.log('///////////////')


const getThingTodo = function(arr){
    return arr.filter(function(item){
        return !item.completed
    })
}
console.log(getThingTodo(todos))
console.log('///////////////')


const sortTodos = function(arr){
    arr.sort(function(a, b){
        if(!a.completed && b.completed){
            return -1
        } else if(a.completed && !b.completed){
            return 1
        } else{
            return 0
        }
    })
}
sortTodos(todos)
console.log(todos)
console.log('///////////////')




// const sortTodos = function(todos){
//     todos.sort(function(a, b){
//         if(a.completed === false && b.completed === true){
//             return -1
//         } else if(a.completed === true && b.completed === false){
//             return 1
//         } else{
//             return 0
//         }
//     })
// }

// sortTodos(todos)
// console.log(todos)