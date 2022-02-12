const reveal = Array.from(document.querySelectorAll('.reveal'));

document.addEventListener('scroll', function() {
    reveal.forEach(item => {
        const {top, bottom} = item.getBoundingClientRect();

        if (bottom > 0 && top < window.innerHeight) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
        }
    })
})