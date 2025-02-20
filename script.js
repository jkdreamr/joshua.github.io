document.addEventListener('DOMContentLoaded', () => {
    // Cinematic scroll reveal with cascading animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Set base delay for section
                entry.target.style.transitionDelay = '0.2s';
                
                // Add visible class to trigger animations
                entry.target.classList.add('visible');
                
                // Get headings and add extra delay
                const headings = entry.target.querySelectorAll('h1, h2');
                headings.forEach(heading => {
                    heading.style.transitionDelay = '0.5s';
                });
                
                // Cascade delays for cards
                const cards = entry.target.querySelectorAll('.card, .pdf-card');
                cards.forEach((card, i) => {
                    card.style.transitionDelay = `${0.8 + (i * 0.2)}s`;
                });
            }
        });
    }, { 
        threshold: 0.2,
        rootMargin: '-100px 0px'
    });

    // Observe all sections for scroll animations
    document.querySelectorAll('section').forEach((section) => {
        observer.observe(section);
    });

    // Smooth scroll behavior for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            
            window.scrollTo({
                top: section.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
});
