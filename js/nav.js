const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

function setMenuOpen(isOpen) {
  navLinks.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
}

navToggle.addEventListener('click', () => {
  setMenuOpen(!navLinks.classList.contains('open'));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});
