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

// สำหรับมือถือ
pop.addEventListener('touchstart', () => {
    pop.src = 'pop2.png';
    score++;
    scoreDisplay.textContent = score;
    popSound.currentTime = 0;
    popSound.play();
});

pop.addEventListener('touchend', () => {
    pop.src = 'pop1.png';
});

pop.addEventListener('pointerdown', () => {
    pop.src = 'pop2.png';
    score++;
    scoreDisplay.textContent = score;
    
    // เล่นเสียง
    popSound.currentTime = 0; // รีเซ็ตเสียง
    popSound.play().catch((error) => {
        console.log('เสียงเล่นไม่ได้จนกว่าจะคลิกครั้งแรก', error);
    });
});

pop.addEventListener('pointerup', () => {
    pop.src = 'pop1.png';
});

