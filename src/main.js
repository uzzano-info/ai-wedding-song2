import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  console.log('Wedding Song UI Initialized...');

  // Basic smooth reveal animation logic using Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply to sections that don't already have fade-in from the initial load
  document.querySelectorAll('section:not(.hero) .grid > div, section:not(.hero) > .container > div').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
});
