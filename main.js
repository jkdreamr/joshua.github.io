// Custom Cursor with Ripple
const cursor = document.querySelector('.ripple-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursor.style.opacity = 1;
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = 0;
});

// Staggered Fade In and Slide Up on Scroll
const cards = document.querySelectorAll('.fade-in-slide-up');
function checkScroll() {
    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight - 100) {
            card.style.animationDelay = `${index * 0.3}s`;
            card.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Page Load Animation with Crazy Zoom
window.addEventListener('load', () => {
    document.body.style.opacity = 0;
    document.body.style.transform = 'scale(0.1)';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s, transform 1s';
        document.body.style.opacity = 1;
        document.body.style.transform = 'scale(1)';
    }, 100);
});

// Hover Effects for Cards (Enhanced)
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.background = 'rgba(255, 255, 255, 0.05)';
        card.style.boxShadow = '0 0 30px #fff, 0 0 50px #fff';
    });
    card.addEventListener('mouseleave', () => {
        card.style.background = '#000';
        card.style.boxShadow = '0 0 10px #fff';
    });
});
