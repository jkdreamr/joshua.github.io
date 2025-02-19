// List of your PDF files (add your actual PDF filenames here)
const pdfFiles = [
    "sample-writing1.pdf",
    "sample-writing2.pdf"
    // Add more PDFs as needed
];

document.addEventListener("DOMContentLoaded", () => {
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
});
