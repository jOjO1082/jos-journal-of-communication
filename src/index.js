// Get current page filename
function getCurrentPage() {
  const path = window.location.pathname;
  const filename = path.split("/").pop() || "index.html";
  return filename;
}

// Set active navigation link
function setActiveNavLink() {
  const currentPage = getCurrentPage();
  const navLinks = document.querySelectorAll(".nav-links > ul > a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const linkPage = href.split("/").pop();

    // Remove active styling from all links
    link.classList.remove("bg-unijos-gold", "text-unijos-blue");
    link.classList.add("hover:text-slate-100", "text-slate-100");

    // Add active styling to current page link
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("bg-unijos-gold", "text-unijos-blue");
      link.classList.remove("hover:text-slate-100", "text-slate-100");
    }
  });
}

// Show/hide dropdown on hover
document.addEventListener("DOMContentLoaded", function () {
  // Set active link
  setActiveNavLink();

  document.querySelectorAll(".nav-links ul > div").forEach((menu) => {
    const dropdown = menu.querySelector("ul");

    if (dropdown) {
      menu.addEventListener("mouseenter", () => {
        dropdown.classList.remove("hidden");
        dropdown.classList.add("flex");
      });

      menu.addEventListener("mouseleave", () => {
        dropdown.classList.add("hidden");
        dropdown.classList.remove("flex");
      });
    }
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const firstName = document.getElementById("first-name").value.trim();
      const lastName = document.getElementById("last-name").value.trim();
      const emailAddress = document
        .getElementById("email-address")
        .value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
      const consent = document.getElementById("consent").checked;

      if (
        !firstName ||
        !lastName ||
        !emailAddress ||
        !subject ||
        !message ||
        !consent
      ) {
        alert(
          "Please complete all required fields and agree to the privacy policy.",
        );
        return;
      }

      const mailtoEmail = "jjmcs@unijos.edu.ng";
      const mailtoSubject = encodeURIComponent(subject);
      const mailtoBody = encodeURIComponent(
        `Name: ${firstName} ${lastName}\nEmail: ${emailAddress}\n\nMessage:\n${message}`,
      );

      window.location.href = `mailto:${mailtoEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
    });
  }
});
