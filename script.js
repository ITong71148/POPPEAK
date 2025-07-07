let pop = document.getElementById('pop');
let scoreDisplay = document.getElementById('score');
let score = 0;

let popSound = new Audio('pop.mp3');

pop.addEventListener('mousedown', () => {
    pop.src = 'pop2.png'; // รูปตอนปากอ้า
    score++;
    scoreDisplay.textContent = score;

    popSound.currentTime = 0; // รีเซ็ตเวลาเสียง (เผื่อคลิกถี่ ๆ)
    popSound.play();

});

pop.addEventListener('mouseup', () => {
    pop.src = 'pop1.png'; // รูปตอนปากปิด
});
