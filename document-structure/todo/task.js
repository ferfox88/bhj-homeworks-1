const tasksForm = document.getElementById('tasks__form');
const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');

tasksForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (taskInput.value.trim() !== '') {
        const tasksList = document.getElementById('tasks__list');
        const taskInput = document.getElementById('task__input');
        tasksElement = `
            <div class="task">
                <div class="task__title">${taskInput.value}</div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;
        tasksList.insertAdjacentHTML('beforeend', tasksElement);
    }
    taskInput.value = '';
})

tasksList.addEventListener('click', (e) => {
    e.preventDefault();
    const taskRemove = Array.from(document.querySelectorAll('.task__remove'));
    const task = e.target.closest('.task');

    taskRemove.forEach(element => {
        if (element = task) {
            task.remove();
        }

    });
})