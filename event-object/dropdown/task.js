const dropdownValue = document.querySelector('.dropdown__value');
const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));


dropdownValue.onclick = () => {
    const dropdown = dropdownValue.closest('.dropdown');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    
    dropdownList.classList.add('dropdown__list_active');
}

dropdownLink.forEach(item => {
    item.onclick = () => {
        dropdownValue.textContent = item.textContent;
        const dropdownList = item.closest('.dropdown__list')
        dropdownList.classList.remove('dropdown__list_active');
        return false;
    }
});



