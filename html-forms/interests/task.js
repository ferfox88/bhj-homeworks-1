const interestCheck = Array.from(document.querySelectorAll('.interest__check'));

interestCheck.forEach(item => {
    item.addEventListener('change', () => {
        const interest = item.closest('li');
        const childCheck = Array.from(interest.querySelectorAll('.interest__check'));
        let check = item.checked;

        childCheck.forEach(el => {
            if (childCheck.length > 1) {
                el.checked = check;
            }
        })
    })
});