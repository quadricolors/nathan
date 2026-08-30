const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => io.observe(el));
} else {
  reveals.forEach(el => el.classList.add("visible"));
}

const form = document.getElementById("waitlistForm");
const successBox = document.getElementById("successBox");

if (form && successBox) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email");

    if (!email || !email.checkValidity()) {
      if (email) email.focus();
      return;
    }

    form.style.display = "none";
    successBox.style.display = "block";
    successBox.focus();
  });
}
