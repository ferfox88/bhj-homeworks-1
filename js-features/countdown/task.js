const timer = document.getElementById('timer');
let timerCount = +timer.textContent

const timerInterval = setInterval(() => {
    if (timerCount === 0) {
        alert('Вы победили в конкурсе!');
    } else {
        timerCount -= 1;
        timer.textContent = timerCount;
    }
}, 1000);