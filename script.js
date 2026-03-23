// =========================
// MOBILE NAV TOGGLE
// =========================

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("nav-open");

    navToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );
  });
}


// =========================
// CLOSE NAV WHEN LINK CLICKED
// =========================

const navLinks = document.querySelectorAll("#siteNav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});


// =========================
// SCROLL SHADOW HEADER
// =========================

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.6)";
  } else {
    header.style.boxShadow = "none";
  }
});