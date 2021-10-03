import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'
import { renderTodos } from './views'

renderTodos()

document.querySelector('#filter-todos').addEventListener('input', function (e) {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    createTodo(e.target.elements.itemName.value)
    renderTodos()
    e.target.elements.itemName.value = ''
    // location.assign(`/edit.html#${id}`)
})

window. addEventListener('storage', (e) => {
    if(e.key === 'todos'){
        loadTodos()
        renderTodos()
    }
})