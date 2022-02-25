const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach(item => {
    item.addEventListener('click', (event) => {

        if (document.querySelector('.tooltip') != null) {
            document.querySelector('.tooltip').remove();
        }

        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.classList.add('tooltip_active');
        tooltip.textContent = item.getAttribute('title');

        item.insertAdjacentElement('afterEnd', tooltip);
        tooltip.style.left = item.getBoundingClientRect().left + 'px';
        event.preventDefault();
        event.stopPropagation();
    })
});