const item = document.querySelector('#item')
const todo = document.querySelector('.todo-box');

item.addEventListener(
    'keyup',
    function (event) {
        if (event.key == 'Enter') {
            addTodo(this.value)
            this.value = ''
        }
    }
)
const addTodo = (data) => {
    const listItem = document.createElement('li')
    listItem.innerHTML = `${data} <i class="fa-solid fa-xmark"></i>`;
    todo.appendChild(listItem)
    listItem.addEventListener(
        'click', function () {
            this.classList.toggle('done')
        })
    listItem.querySelector('i').addEventListener(
        'click', function () {
            listItem.remove()
        }
    )
}