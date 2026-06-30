document.addEventListener('DOMContentLoaded', () => {
  // Reveal elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  // Add reveal class to project cards and sections
  document.querySelectorAll('section, .project-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // Scroll animations are handled by IntersectionObserver
});
