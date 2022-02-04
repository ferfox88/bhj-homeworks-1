const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tab.forEach((item, index) => {
    item.onclick = () => {
        tabActive = document.querySelector('.tab_active');
        tabActive.classList.remove('tab_active');
        item.classList.add('tab_active');

        tabContentActive = document.querySelector('.tab__content_active');
        tabContentActive.classList.remove('tab__content_active');
        tabContent[index].classList.add('tab__content_active');
    }
});