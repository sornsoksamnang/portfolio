const revealTargets = document.querySelectorAll(
  '#about, #skills, #projects, #contact, .skill-category, .project-card'
);

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
} else {
  revealTargets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => observer.observe(el));
}
