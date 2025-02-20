document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll behavior
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

    // Enhanced Intersection Observer for dramatic scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to section
                entry.target.classList.add('visible');
                
                // Animate section elements with cascading delays
                const elements = entry.target.children;
                Array.from(elements).forEach((el, index) => {
                    el.style.transitionDelay = `${index * 0.2}s`;
                });

                // Special animation for cards
                const cards = entry.target.querySelectorAll('.card, .pdf-card');
                cards.forEach((card, i) => {
                    card.style.transitionDelay = `${0.4 + (i * 0.2)}s`;
                });

                // Animate social links with stagger
                const socialLinks = entry.target.querySelectorAll('.social-link');
                socialLinks.forEach((link, i) => {
                    link.style.transitionDelay = `${0.2 + (i * 0.1)}s`;
                });
            }
        });
    }, { 
        threshold: 0.1,  // Trigger earlier
        rootMargin: '-50px 0px'
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // 3D hover effect for cards
    document.querySelectorAll('.card, .pdf-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xRotation = ((y - rect.height / 2) / rect.height) * 20;
            const yRotation = ((x - rect.width / 2) / rect.width) * 20;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${-xRotation}deg)
                rotateY(${yRotation}deg)
                translateZ(20px)
                scale(1.02)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style
