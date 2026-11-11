"use strict";

document.documentElement.classList.add("js-ready");

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");
const year = document.querySelector("#current-year");

if (year) {
    year.textContent = String(new Date().getFullYear());
}

if (window.lucide) {
    window.lucide.createIcons();
}

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        navigation.classList.toggle("is-open", !isOpen);
        menuToggle.querySelector(".menu-toggle-label").textContent = isOpen ? "Menu" : "Close";
        menuToggle.querySelector("svg")?.setAttribute("data-lucide", isOpen ? "menu" : "x");

        if (window.lucide) {
            window.lucide.createIcons();
        }
    });

    navigation.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.querySelector(".menu-toggle-label").textContent = "Menu";
            menuToggle.querySelector("svg")?.setAttribute("data-lucide", "menu");
            navigation.classList.remove("is-open");

            if (window.lucide) {
                window.lucide.createIcons();
            }
        }
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle && navigation && navigation.classList.contains("is-open")) {
        navigation.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.querySelector(".menu-toggle-label").textContent = "Menu";
        menuToggle.querySelector("svg")?.setAttribute("data-lucide", "menu");
        menuToggle.focus();

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
});

const revealElements = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
}
