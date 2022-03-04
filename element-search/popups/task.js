const main = document.getElementById('modal_main');
const close = Array.from(document.querySelectorAll('.modal__close'));
const success = document.getElementById('modal_success');
const showSuccess = document.querySelector('.show-success');

main.classList.add('modal_active');

close.forEach((item) => {
    item.onclick = () => {
        main.classList.remove('modal_active');
        success.classList.remove('modal_active');
    } 
});

showSuccess.onclick = () => {
    main.classList.remove('modal_active');
    success.classList.add('modal_active');
}