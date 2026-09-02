import { renderFaq } from "./data/faq.js";

renderFaq();

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

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

<!-- Cloudflare Web Analytics --><script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "ab8d63750bfe4564bfc2dc5ef79d4b58"}'></script><!-- End Cloudflare Web Analytics -->
