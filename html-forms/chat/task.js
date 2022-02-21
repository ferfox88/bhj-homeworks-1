const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
})

chatWidgetInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && chatWidgetInput.value !== '') {

        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${getTime()}</div>
                <div class="message__text">${chatWidgetInput.value}</div>
            </div>
        `;

        messages.innerHTML += `
            <div class="message">
                <div class="message__time">${getTime()}</div>
                <div class="message__text">${getAnswerBot()}</div>
            </div>
        `;

        chatWidgetInput.value = '';
    }
})

function getTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    return h + ':' + m;
}

function getAnswerBot() {
    const bot = [
        'Кто тут?',
        'Где ваша совесть?',
        'К сожалению, все операторы сейчас заняты. Не пишите нам больше.',
        'Добрый день! До свидания!',
        'Мы ничего не будем вам продавать!',
        'Вы не купили ни одного товара, чтобы так с нами разговаривать!',
        'Добрый день, мы ещё не проснулись. Позвоните через 10 лет'
    ]
    index = Math.floor(Math.random() * bot.length);
    return bot[index];
}
