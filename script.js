const pdfFiles = [
    "crypto-ai-paper.pdf",
    "blockchain-math.pdf"
    // Add your actual PDFs here
];

document.addEventListener("DOMContentLoaded", () => {
    // PDF embedding
    const pdfList = document.getElementById("pdf-list");
    pdfFiles.forEach(pdf => {
        const div = document.createElement("div");
        div.className = "pdf-item";
        div.innerHTML = `
            <a href="writings/${pdf}" target="_blank">${pdf.replace('.pdf', '')}</a>
            <iframe src="writings/${pdf}" width="100%" height="400"></iframe>
        `;
        pdfList.appendChild(div);
    });

    // Scroll-based animations
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
});
