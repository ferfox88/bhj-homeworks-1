const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');

fontSize.forEach(item => {
    item.onclick = () => {
        const fontSizeActive = document.querySelector('.font-size_active');
        fontSizeActive.classList.remove('font-size_active');
        item.classList.add('font-size_active');

        let size = item.getAttribute('data-size');
        if (size === 'small') {
            book.className = 'book book_fs-small';
        } else if (size === 'big') {
            book.className = 'book book_fs-big';
        } else {
            book.className = 'book';
        }
        return false;
    }
});