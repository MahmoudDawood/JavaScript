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

document.querySelector('#adding-form').addEventListener('submit', function (e) {
    const id = uuidv4()
    e.preventDefault()
    todos.push({
        id: id,
        text: e.target.elements.itemName.value,
        completed: false,
    })
    saveTodos(todos)

    location.assign(`/edit.html#${id}`)
})