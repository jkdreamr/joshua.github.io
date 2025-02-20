document.addEventListener('DOMContentLoaded', () => {
    // Initialize first section as active
    document.querySelector('.section').classList.add('active');

    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Update active nav link
                const currentSection = entry.target.id;
                document.querySelectorAll('.nav-links a').forEach(link => {
                    if (link.getAttribute('href') === `#${currentSection}`) {
                        link.style.opacity = '1';
                    } else {
                        link.style.opacity = '0.7';
                    }
                });
            }
        });
    }, {
        threshold: 0.3
    });

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Optional: Add parallax effect on scroll
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const sections = document.querySelectorAll('.section');
                sections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    const scrollPercent = rect.top / window.innerHeight;
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        section.style.transform = `translateY(${scrollPercent * 50}px)`;
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    });
});
