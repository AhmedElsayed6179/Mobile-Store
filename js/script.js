// Wait DOM ready
document.addEventListener("DOMContentLoaded", () => {
  /* ========== Hamburger Menu ========== */
  const hamburger = document.getElementById("hamburger");
  const links = document.querySelector(".links");

  hamburger.addEventListener("click", () => {
    links.classList.toggle("show");
    hamburger.textContent = links.classList.contains("show") ? "✖" : "☰";
  });

  /* ========== Show More Button (Products) ========== */
  const items = document.querySelectorAll(".MobileItems .item");
  const btn = document.getElementById("showMoreBtn");
  let expanded = false;

  // Show first 3 by default
  items.forEach((item, index) => {
    if (index < 3) item.classList.add("show");
    else item.style.display = "none";
  });

  btn.addEventListener("click", () => {
    if (!expanded) {
      items.forEach((item) => (item.style.display = "flex"));
      btn.textContent = "▲ Show Less";
      expanded = true;
    } else {
      items.forEach((item, index) => {
        if (index > 2) item.style.display = "none";
      });
      btn.textContent = "▼ Show More";
      expanded = false;
    }
  });
});

// ---------- Contact Form ----------
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevents actual submission
  const message = document.getElementById("formMessage");
  message.textContent = "Internet error, please try again later";
});

const buttons = document.querySelectorAll(".readMoreBtn");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const message = this.nextElementSibling;
    if (message.style.display === "block") {
      message.style.display = "none";
      this.textContent = "Read More"; // Text when message is hidden
    } else {
      message.style.display = "block";
      this.textContent = "Hide Details"; // Text when message is visible
      message.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));

// Preloader hide after page load
window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }, 500);
});

document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Cannot complete the purchase. Try again later.');
    });
});


