// Particle Background
const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1.5 + 0.5;
        this.velocityX = (Math.random() - 0.5) * 1.5;
        this.velocityY = (Math.random() - 0.5) * 1.5;
        this.color = 'rgba(255, 255, 255, 0.1)';
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        if (this.x < 0 || this.x > canvas.width) this.velocityX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.velocityY *= -1;

        // Add subtle color change for aesthetic effect
        if (Math.random() < 0.01) {
            this.color = `rgba(0, 255, 204, ${Math.random() * 0.3 + 0.1})`;
        }
    }
}

const particles = [];
for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Scroll Animations
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 150) {
            section.classList.add('active');
            section.style.transitionDelay = `${Math.random() * 0.3}s`; // Staggered delays for variety
        }
    });
});

// Profile Picture Upload
const profilePic = document.getElementById('profile-pic');
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'image/*';
fileInput.style.display = 'none';

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profilePic.src = e.target.result;
            profilePic.style.animation = 'fadeIn 1s ease-out';
            setTimeout(() => profilePic.style.animation = '', 1000);
        };
        reader.readAsDataURL(file);
    }
});

profilePic.addEventListener('click', () => {
    fileInput.click();
});

// Form Submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.animation = 'pulse 0.8s ease-in-out';
    setTimeout(() => {
        form.style.animation = '';
        alert('Message sent successfully! (This is a demo)');
        form.reset();
    }, 800);
});

// Hover Effects for Cards
const cards = document.querySelectorAll('.experience-card, .writing-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.background = 'rgba(0, 255, 204, 0.08)';
        card.style.transform = 'translateY(-15px) scale(1.05) rotate(1deg)';
        card.style.boxShadow = '0 0 30px #00ffcc';
        card.style.opacity = '1';
    });
    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(255, 255, 255, 0.02Sorry about that, something didn't go as planned. Please try again, and if you're still seeing this message, go ahead and restart the app.
