window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    hamburger.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".project-card, .about-image");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    }
  });
}

// Initialize elements for animation
document.querySelectorAll(".project-card, .about-image").forEach((element) => {
  element.style.opacity = 0;
  element.style.transform = "translateY(50px)";
  element.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", animateOnScroll);
// Initial check in case elements are already in view
window.addEventListener("load", animateOnScroll);
