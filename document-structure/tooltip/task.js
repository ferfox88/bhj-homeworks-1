const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

hasTooltip.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (document.querySelector('.tooltip') != null) {
            document.querySelector('.tooltip').remove();
        }

        tooltip.classList.toggle('tooltip_active');

        tooltip.textContent = item.getAttribute('title');
        item.insertAdjacentElement('afterEnd', tooltip);
        tooltip.style.left = item.getBoundingClientRect().left + 'px';
    })
});