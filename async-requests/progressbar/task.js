const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState = xhr.DONE) {
            xhr.upload.onprogress = function (event) {
                progress.value = event.loaded / event.total;
                alert('Загружено на сервер');
            }
        }
    })

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    const formData = new FormData(form);

    xhr.send(formData);
})