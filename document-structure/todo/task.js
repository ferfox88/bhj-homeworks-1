const tasksForm = document.getElementById('tasks__form');
const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');

tasksForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (taskInput.value.trim() !== '') {
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

    const close = e.target.classList.value;
    if (close === 'task__remove') {
        e.target.closest('.task').remove();
    }
})