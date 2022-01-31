const dead = document.getElementById('dead');
let countDead = +dead.textContent;

const lost = document.getElementById('lost');
let countLost = +lost.textContent;

for (let i = 1; i < 10; i++) {
    const hole = document.getElementById('hole' + i);

    function startGame() {
        countDead = 0;
        dead.textContent = countDead;
        countLost = 0;
        lost.textContent = countLost;
    }

    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            countDead++;
            dead.textContent = countDead;
            if(countDead === 10) {
                alert('Вы победили!');
                startGame();
            }
        } else {
            countLost++;
            lost.textContent = countLost;
            if(countLost === 5) {
                alert('Вы проиграли!');
                startGame();
            }
        }
    }
}