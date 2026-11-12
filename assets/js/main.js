document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.querySelector('[data-current-year]');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
      menuToggle.setAttribute('aria-expanded', String(nav.classList.contains('nav-open')));
    });
  }
});
