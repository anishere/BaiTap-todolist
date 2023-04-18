let todoInput = document.getElementById('todo-input')
let addBtn = document.getElementById('add-btn')
let list = document.getElementById('list')

addBtn.addEventListener('click',function() {
    let newItem = document.createElement('li')
    let itemText = document.createElement('span')
    let editBtn = document.createElement('button')
    let inputEdit = document.createElement('input')
    let saveBtn = document.createElement('button')

    itemText.innerText = todoInput.value
    newItem.appendChild(itemText)

    editBtn.innerText = 'Edit'
    inputEdit.style.display = 'none'
    editBtn.addEventListener('click',function() {
        inputEdit.value = itemText.innerText
        itemText.style.display = 'none'
        editBtn.style.display = 'none'
        inputEdit.style.display = 'inline-block'
        saveBtn.style.display = 'inline-block'
    })
    newItem.appendChild(editBtn)
    newItem.appendChild(inputEdit)

    saveBtn.innerText = 'Save'
    saveBtn.style.display = 'none'
    saveBtn.addEventListener('click',function() {
        itemText.innerText = inputEdit.value
        editBtn.style.display = 'inline-block'
        saveBtn.style.display = 'none'
        inputEdit.style.display = 'none'
        itemText.style.display = 'inline-block'
    })
    newItem.appendChild(saveBtn)

    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    deleteBtn.addEventListener('click',function() {
        newItem.remove()
    })

    newItem.appendChild(deleteBtn)
    list.appendChild(newItem)
    todoInput.value = ''
})