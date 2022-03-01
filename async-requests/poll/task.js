const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let json = JSON.parse(xhr.responseText);
        pollTitle.innerText = json.data.title;
        json.data.answers.forEach(element => {
            pollAnswers.innerHTML += `
                <button class="poll__answer">${element}</button>
            `
        });

        const button = Array.from(document.querySelectorAll('button'));
        button.forEach(element => {
            element.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            })
        });
    }
})

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

xhr.send();