// ===============================
// Mobile Navigation
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Close menu after clicking a link (mobile)
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// Navbar shadow while scrolling
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 40) {
        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.18)";
    } else {
        nav.style.boxShadow = "none";
    }
});
