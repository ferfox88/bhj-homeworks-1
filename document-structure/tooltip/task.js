const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach(item => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');

    item.insertAdjacentElement('afterEnd', tooltip);
    tooltip.textContent = item.getAttribute('title');
    tooltip.style.left = item.getBoundingClientRect().left + 'px';
});

hasTooltip.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        item.nextElementSibling.classList.toggle("tooltip_active")
    })
});