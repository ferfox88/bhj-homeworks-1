const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
const rotatorCaseActive = document.querySelector('.rotator__case_active');
let index = 0;

function rotator() {
    if (index === rotatorCase.length - 1) {
        rotatorCase[index].classList.remove('rotator__case_active');
        index = 0;
        rotatorCase[index].classList.add('rotator__case_active');
    } else {
        rotatorCase[index].classList.remove('rotator__case_active');
        index++;
        rotatorCase[index].classList.add('rotator__case_active');
    }
}


setInterval(rotator, 1000);