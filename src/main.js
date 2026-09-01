import { renderFaq } from "./data/faq.js";

renderFaq();

const hamburger = document.querySelector < HTMLButtonElement > "#hamburger";
const navMenu = document.querySelector < HTMLElement > "#nav-menu";

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Update ARIA attribute for screen readers
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  // Optional: Close menu when clicking outside or on a link
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}
