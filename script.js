// Soepele scroll voor navigatie links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header transparantie aanpassen bij scrollen
const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    return;
  }

  if (currentScroll > lastScroll) {
    // Scrolling down
    header.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    // Scrolling up
    header.style.background = "rgba(255, 255, 255, 0.95)";
  }

  lastScroll = currentScroll;
});

// Fade-in animatie voor elementen bij scrollen
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Voeg fade-in animatie toe aan secties
document
  .querySelectorAll(".merkverhaal, .nieuws, .nieuws-card")
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(element);
  });
