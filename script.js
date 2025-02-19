// List of your PDF files
const pdfFiles = [
    "sample-writing1.pdf",
    "sample-writing2.pdf"
    // Add more PDFs as needed
];

document.addEventListener("DOMContentLoaded", () => {
    // PDF embedding
    const pdfList = document.getElementById("pdf-list");
    pdfFiles.forEach(pdf => {
        const div = document.createElement("div");
        div.className = "pdf-item";
        div.innerHTML = `
            <a href="writings/${pdf}" target="_blank">${pdf.replace('.pdf', '')}</a>
            <iframe src="writings/${pdf}" width="100%" height="300"></iframe>
        `;
        pdfList.appendChild(div);
    });

    // Dark mode toggle
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Check for saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.setAttribute("data-theme", "dark");
    }

    toggleButton.addEventListener("click", () => {
        if (body.getAttribute("data-theme") === "dark") {
            body.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
        } else {
            body.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    });
});
