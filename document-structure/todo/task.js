const tasksForm = document.getElementById('tasks__form');
const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');

tasksForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (taskInput.value !== '') {
        const tasksList = document.getElementById('tasks__list');
        const taskInput = document.getElementById('task__input');
        tasksList.innerHTML += `
        <div class="task">
            <div class="task__title">${taskInput.value}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `;
        const taskRemove = Array.from(document.querySelectorAll('.task__remove'));
        taskRemove.forEach(item => {
            item.addEventListener('click', () => {
                item.closest('.task').remove();
            })
        });
    }
    taskInput.value = '';
})