function updateResume() {
  document.getElementById("r-name").innerText =
    document.getElementById("name").value || "Your Name";

  document.getElementById("r-email").innerText =
    document.getElementById("email").value || "Email";

  document.getElementById("r-phone").innerText =
    document.getElementById("phone").value || "Phone";

  document.getElementById("r-skills").innerText =
    document.getElementById("skills").value;

  document.getElementById("r-education").innerText =
    document.getElementById("education").value;

  document.getElementById("r-experience").innerText =
    document.getElementById("experience").value;
}

function downloadPDF() {
  const resume = document.getElementById("resume");
  html2pdf().from(resume).save("resume.pdf");
}

