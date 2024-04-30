document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');

    addButton.addEventListener('click', function() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = todoText;
            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    });
});
