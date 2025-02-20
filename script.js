// DOM Elements
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const links = document.querySelectorAll('a');
const heroSection = document.querySelector('.hero-section');
const glitchText = document.querySelector('.glitch');
const nav = document.querySelector('.nav-wrapper');
const revealElements = document.querySelectorAll('.reveal');
const cards = document.querySelectorAll('.card');
const titles = document.querySelectorAll('.section-title');
const skillItems = document.querySelectorAll('.skill-item');

// Custom cursor movement
document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        setTimeout(() => {
            cursorFollower.style.left = `${e.clientX}px`;
            cursorFollower.style.top = `${e.clientY}px`;
        }, 50);
    });
});

// Link hover effects
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursorFollower.style.transform = 'scale(0)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll reveal animation
function revealOnScroll() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Parallax scroll effect
function handleScroll() {
    const scrolled = window.pageYOffset;
    
    // Hero parallax
    if (glitchText && heroSection) {
        const rate = scrolled * 0.5;
        glitchText.style.transform = `translate3d(0, ${rate}px, 0)`;
        heroSection.style.opacity = Math.max(0, 1 - scrolled / 500);
    }
    
    // Navigation background
    if (nav) {
        nav.style.backgroundColor = window.scrollY > 100 ? 
            'rgba(0, 0, 0, 0.95)' : 
            'rgba(0, 0, 0, 0.8)';
    }
    
    // Reveal elements
    revealOnScroll();
}

// Card hover effects
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `
            perspective(1000px) 
            rotateX(${angleX}deg) 
            rotateY(${angleY}deg) 
            scale3d(1.05, 1.05, 1.05)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// Skill items animation
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.1)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Glitch effect
function createGlitchEffect() {
    if (glitchText) {
        setInterval(() => {
            const randomOffset = () => `${Math.random() * 10 - 5}px`;
            glitchText.style.transform = `translate(${randomOffset()}, ${randomOffset()})`;
            
            setTimeout(() => {
                glitchText.style.transform = 'translate(0, 0)';
            }, 50);
        }, 3000);
    }
}

// Initialize
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    createGlitchEffect();
    revealOnScroll(); // Initial check for elements in view
});
