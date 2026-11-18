/* Vanilla JavaScript interactions */
"use strict";

const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const dialog = document.querySelector(".detail-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const toast = document.querySelector(".toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

// Theme preference is stored locally; the default is the light theme.
const savedTheme = localStorage.getItem("mehaa-portfolio-theme");
if (savedTheme === "dark") root.dataset.theme = "dark";

themeButton.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  if (nextTheme === "light") delete root.dataset.theme;
  else root.dataset.theme = nextTheme;
  localStorage.setItem("mehaa-portfolio-theme", nextTheme);
  themeButton.querySelector(".theme-icon").textContent = nextTheme === "dark" ? "☀" : "☾";
});

// Responsive navigation.
menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Reveal content as it enters the viewport.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

// Interest cards expand on tap/click and remain keyboard accessible.
document.querySelectorAll(".interest-card").forEach((card) => {
  card.addEventListener("click", () => {
    const expanded = card.getAttribute("aria-expanded") === "true";
    card.setAttribute("aria-expanded", String(!expanded));
  });
});

// Hobby rows open an accessible detail dialog.
document.querySelectorAll(".hobby-row").forEach((row) => {
  row.addEventListener("click", () => {
    dialogTitle.textContent = row.querySelector("b").textContent;
    dialogDescription.textContent = row.dataset.detail;
    dialog.showModal();
  });
});

// Family photo opens its contextual description.
document.querySelector(".family-photo").addEventListener("click", (event) => {
  const button = event.currentTarget;
  dialogTitle.textContent = button.dataset.title;
  dialogDescription.textContent = button.dataset.description;
  dialog.showModal();
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.querySelector("#year").textContent = new Date().getFullYear();

// Keep placeholder contact links obvious until the owner replaces them.
document.querySelectorAll('a[href*="YOUR_"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast("Add your email address or GitHub username in index.html first.");
  });
});
