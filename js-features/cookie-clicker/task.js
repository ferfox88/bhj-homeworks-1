const cookie = document.getElementById('cookie');
const clicker__counter = document.getElementById('clicker__counter');
let count = +clicker__counter.textContent;

cookie.onclick = () => {
    count += 1;
    clicker__counter.textContent = count;

    if (cookie.width === 200) {
        cookie.width += 20;
        cookie.height += 20;
    } else {
        cookie.width -= 20;
        cookie.height -= 20;
    }
}