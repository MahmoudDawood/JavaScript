import uuidv4 from 'uuid/v4'
import {renderTodos} from './views'

let todos = []

const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try{
        todos =  todosJSON ? JSON.parse(todosJSON) : []
    } catch(e){
        todos = []
    }
}
loadTodos()

const saveTodos = () => localStorage.setItem('todos',JSON.stringify(todos))

const getTodos = () => todos

const createTodo = (title) => {
    const text = title.trim()
    if(text.length < 1){
        return
    }
    todos.push({
        id: uuidv4(),
        text,
        completed: false,
    })
    saveTodos()
    renderTodos()
}

const removeTodo = (todoId) => {
    const idx = todos.findIndex((todo) => todo.id === todoId)
    if(idx < 0){
        return
    }
    todos.splice(idx, 1)
    saveTodos()
    renderTodos()
}

const toggleTodo = (todoId) => {
    const todo = todos.find((todo) => todo.id === todoId)
    if(todo){
        todo.completed = !todo.completed
    }
    saveTodos()
    renderTodos()
}

export {loadTodos, getTodos, createTodo, removeTodo, toggleTodo}