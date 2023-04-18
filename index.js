let todoInput = document.getElementById('todo-input')
let addBtn = document.getElementById('add-btn')
let list = document.getElementById('list')

addBtn.addEventListener('click',function() {
    let newItem = document.createElement('li')
    let itemText = document.createElement('span')

    itemText.innerText = todoInput.value
    newItem.appendChild(itemText)

    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    deleteBtn.addEventListener('click',function() {
        newItem.remove()
    })

    newItem.appendChild(deleteBtn)
    list.appendChild(newItem)
    todoInput.value = ''
})