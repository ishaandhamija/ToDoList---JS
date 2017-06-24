/**
 * Created by ishaandhamija on 24/06/17.
 */

window.onload = function () {

    todos = []

    let newtodo = document.getElementById('newtodo')
    let addtodo = document.getElementById('addtodo')
    let todolist = document.getElementById('todolist')

    addtodo.onclick = function () {
        addAndSave(newtodo.value, todolist)
        displayTodos(todolist)
    }

}

function addAndSave(todoToAdd, list) {
    retrieveTodos()
    addTodoToList(todoToAdd, list)
    saveTodoToStorage(todoToAdd)
}

function retrieveTodos() {
    let todosInStore = localStorage.getItem('storedTodoList')
    if (todosInStore){
        todos = JSON.parse(todosInStore)
    }
}

function addTodoToList(todoToAdd, list) {
    todos.push({
        task: todoToAdd,
        done: false
    })
}

function saveTodoToStorage() {
    localStorage.setItem('storedTodoList', JSON.stringify(todos))
}

function displayTodos(list) {
    retrieveTodos()
    console.log(todos[todos.length-1].task)
    list.innerHTML = ''
    for (index in list) {
        if (index >= 2) {
            addOneRow(index, list)
        }
    }
}

function addOneRow(i, list) {
    let toBeAdded = document.createElement('li')
    toBeAdded.innerText = todos[i].task
    toBeAdded.setAttribute('data-id', i)
    console.log(toBeAdded)
    list.appendChild(toBeAdded)
}