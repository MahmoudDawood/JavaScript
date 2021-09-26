'use strict'

let todos = getSavedTodos() // text, completed

const filters = {
    searchText: '',
    hideCompleted: false,
}

renderTodos(todos, filters)

document.querySelector('#filter-todos').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    const id = uuidv4()
    e.preventDefault()
    const text = e.target.elements.itemName.value.trim()
    if(text.length < 1){
        return
    }
    todos.push({
        id: id,
        text,
        completed: false,
    })
    e.target.itemName.value = ''
    saveTodos(todos)
    renderTodos(todos, filters)

    // location.assign(`/edit.html#${id}`)
})