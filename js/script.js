const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

const typed = new Typed('#typed-output', {
    strings: [
        "Communication 💬",
        "Marketing Strategies 📈",
        "Content Creation 🎥",
        "Taking your brand to the next level 🚀"
    ],
    typeSpeed: 60,        // Typing speed
    backSpeed: 40,        // Backspacing speed
    backDelay: 1500,      // Delay before starting backspacing
    loop: true,            // Loop the animation
    showCursor: false,     // Show the blinking cursor
});

