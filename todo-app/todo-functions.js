//Fetch existing todos from local storage
const getSavedTodos = function(){
    const todosJSON = localStorage.getItem('todos')
    if(todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else{
        return []
    }
}

//Save todos to local storage
const saveTodos = function(list){
    localStorage.setItem('todos',JSON.stringify(list))
}

//Delete todo by id
const deleteTodo  = function(id){
    const idx = todos.findIndex(function(item){
        return item.id === id
    })
    if(idx > -1){
        todos.splice(idx, 1)
    }
    saveTodos(todos)
    renderTodos(todos, filters)
}

//Toggle todo
const toggleTodo = function(id){
    const result = todos.find(function(item){
        return item.id === id
    })
    if(result !== undefined){
        result.completed = !result.completed
    }
    saveTodos(todos)
    renderTodos(todos, filters)
}

//Get the DOM elements for an individual notes
const generateTodoDOM = function(item){
    const itemBlock = document.createElement('div')
    const checkItem = document.createElement('input')
    const todoText = document.createElement('a')
    const deleteItem = document.createElement('button')

    //Setting checkbox
    checkItem.setAttribute('type', 'checkbox')
    checkItem.checked = item.completed
    itemBlock.appendChild(checkItem)
    checkItem.addEventListener('change', function(){
        toggleTodo(item.id)
    })

    //Setting todo text
    itemBlock.appendChild(todoText)
    if(item.text.length > 0){
        todoText.textContent = item.text
    } else{
        todoText.textContent = 'Unnamed task'
    }
    todoText.setAttribute('href', `edit.html#${item.id}`)

    ///Setting delete button
    deleteItem.textContent = 'x'
    itemBlock.appendChild(deleteItem)
    deleteItem.addEventListener('click', function(){
        deleteTodo(item.id)
    })

    return  itemBlock
}

//Get the DOM elemets for list summary
const generateSummaryDOM = function(list){
    const completedTasks = list.filter(function(item){  
        return !item.completed
    })
    const leftTodos = document.createElement('h2') //create
    leftTodos.textContent = `You have ${completedTasks.length} todos left.` //modify
    return leftTodos
}

//Render application todos based on filter
const renderTodos = function(list, filters){
    const filteredList = list.filter(function(item){
        const searchResult = item.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedResult =  !filters.hideCompleted || !item.completed
        return searchResult && hideCompletedResult
    })

    document.querySelector('#todo-list').innerHTML = ''

    document.querySelector('#todo-list').appendChild(generateSummaryDOM(list))  //Add

    filteredList.forEach(function(item){
        document.querySelector('#todo-list').appendChild(generateTodoDOM(item))
    })
}
