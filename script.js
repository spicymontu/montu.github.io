// Simple scroll animation
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".card, .about, .contact");
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
});

// Animation styles
const style = document.createElement("style");
style.innerHTML = `
  .card, .about, .contact {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
  }
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);
