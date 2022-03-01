const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); 

        if (item.nextSibling.className !== 'tooltip' && item.nextSibling.className !== 'tooltip tooltip_active') {
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');

            item.insertAdjacentElement('afterEnd', tooltip);
            tooltip.textContent = item.getAttribute('title');
            tooltip.style.left = item.getBoundingClientRect().left + 'px';
        }
    
        item.nextElementSibling.classList.toggle("tooltip_active");
    })
});