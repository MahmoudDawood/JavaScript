import { getFilters } from './filters'
import { getTodos, toggleTodo, removeTodo } from './todos'

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
    const todoEl = document.querySelector('#todos')
    const {searchText: textino, hideCompleted: hidino} = getFilters() //Deconstruction
    const filteredList = getTodos().filter((item) => {
        const searchResult = item.text.toLowerCase().includes(textino.toLowerCase())
        const hideCompletedResult =  !hidino || !item.completed
        return searchResult && hideCompletedResult
    })

    todoEl.innerHTML = ''

    const incompletedTodos = getTodos().filter((item) => !item.completed)
    todoEl.appendChild(generateSummaryDOM(incompletedTodos))

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

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('a')
    const removeButton = document.createElement('button')

    //Setting checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => toggleTodo(todo.id))

    //Setting todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)
    todoText.setAttribute('href', `edit.html#${todo.id}`)

    //Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    ///Setting delete button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click',() => {
        removeTodo(todo.id)
    })
    return todoEl
}

const generateSummaryDOM = (incompletedTodos) => {
    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    const plural = incompletedTodos.length === 1 ?  '' : 's'
    summary.textContent = `You have ${incompletedTodos.length} todo${plural} left` //modify
    return summary
}

export {renderTodos, generateTodoDOM, generateSummaryDOM}