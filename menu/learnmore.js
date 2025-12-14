// Collapsible sections
const collapsibles = document.querySelectorAll('.section.collapsible h2');

collapsibles.forEach(h2 => {
  const content = h2.nextElementSibling; // the section-content div
  const toggle = h2.querySelector('.toggle');

  // Start collapsed
  content.style.display = 'none';
  toggle.textContent = '▼';

  // Click to toggle
  h2.addEventListener('click', () => {
    if (content.style.display === 'none') {
      content.style.display = 'block';
      toggle.textContent = '▲';
    } else {
      content.style.display = 'none';
      toggle.textContent = '▼';
    }
  });
});

// Wait until page fully loads, then add class to body
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

