'use strict'

//Fetch existing todos from local storage
const getSavedTodos =() => {
    const todosJSON = localStorage.getItem('todos')
    try{
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch(e){
        return []
    }
}

//Save todos to local storage
const saveTodos = (list) => {
    localStorage.setItem('todos',JSON.stringify(list))
}

//Delete todo by id
const deleteTodo  = (id) => {
    const idx = todos.findIndex((item) => item.id === id)
    if(idx > -1){
        todos.splice(idx, 1)
    }
    saveTodos(todos)
    renderTodos(todos, filters)
}

//Toggle todo
const toggleTodo = (id) => {
    const result = todos.find((item) => item.id === id)
    if(result){
        result.completed = !result.completed
    }
    saveTodos(todos)
    renderTodos(todos, filters)
}

//Get the DOM elements for an individual notes
const generateTodoDOM = (item) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('a')
    const removeButton = document.createElement('button')

    //Setting checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = item.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => toggleTodo(item.id))

    //Setting todo text
    todoText.textContent = item.text
    containerEl.appendChild(todoText)
    todoText.setAttribute('href', `edit.html#${item.id}`)

    //Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    ///Setting delete button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', function(){
        deleteTodo(item.id)
    })

    return  todoEl
}

//Get the DOM elemets for list summary
const generateSummaryDOM = (list) => {
    const completedTasks = list.filter((item) => !item.completed)
    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    const plural = completedTasks.length === 1 ?  '' : 's'
    summary.textContent = `You have ${completedTasks.length} todo${plural} left` //modify
    return summary
}

//Render application todos based on filter
const renderTodos = (list, filters) =>{
    const todoEl = document.querySelector('#todos')
    const filteredList = list.filter((item) => {
        const searchResult = item.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedResult =  !filters.hideCompleted || !item.completed
        return searchResult && hideCompletedResult
    })

    todoEl.innerHTML = ''

    todoEl.appendChild(generateSummaryDOM(list)) 

    if(filteredList.length < 1){
        const messageEl = document.createElement('p')
        messageEl.textContent = 'No to-dos to show'
        messageEl.classList.add('empty-message')
        todoEl.appendChild(messageEl)
        return
    }
    filteredList.forEach((item) => {
        todoEl.appendChild(generateTodoDOM(item))
    })
}
