const items = document.getElementById('items');
const loader = document.getElementById('loader');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', (e) => {
    if (xhr.readyState === xhr.DONE) {
        let valute = JSON.parse(xhr.responseText).response.Valute;
        console.log(valute);

        for (let key in valute) {
            items.innerHTML += `
            <div class="item">
                <div class="item__code">${valute[key].CharCode}</div>
                <div class="item__value">${valute[key].Value}</div>
                <div class="item__currency">руб.</div>
            </div>
            `
        }

        loader.classList.remove('loader_active');
    }
})

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');

xhr.send();