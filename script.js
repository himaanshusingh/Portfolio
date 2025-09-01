// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

// Check for saved theme preference or respect OS preference
const savedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

// Apply the saved theme
if (savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
} else {
  document.documentElement.removeAttribute("data-theme");
  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Add animation to elements when they come into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 1s ease forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe project cards and other elements
document
  .querySelectorAll(".project-card, .about-image, .contact-item, .contact-form")
  .forEach((el) => {
    el.style.opacity = "0";
    observer.observe(el);
  });

// Contact form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    alert(
      "Thank you for your message, " + name + "! I will get back to you soon."
    );
    contactForm.reset();
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.getElementById("header").offsetHeight;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
