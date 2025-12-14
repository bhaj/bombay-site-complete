/**
@param {string} mainContentSelector
*/

function initializeAutoScroll(mainContentSelector) { 
  const content = document.querySelector(mainContentSelector); 
  if (!content) return; content.scrollIntoView({ behavior: "smooth" }); 
} 
window.initializeAutoScroll = initializeAutoScroll;

document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Toggle
  const navMenu = document.querySelector(".nav-menu");
  const toggleButton = document.querySelector(".hamburger-toggle"); 

  if (toggleButton && navMenu) {
    toggleButton.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      const isExpanded = navMenu.classList.contains("show");
      toggleButton.setAttribute("aria-expanded", isExpanded);
    });
  }
  // Highlight Current Nav Link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Scrolling Effect for Header
  let lastScroll = 0;
  const header = document.querySelector('.site-header');
  const sidepanel = document.querySelector('.sidepanel');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
        
    if (currentScroll > lastScroll && currentScroll > 80) { 
      header.style.top = '-80px';
      if (sidepanel) {
        sidepanel.style.top = '0';
        sidepanel.style.height = '100vh';
      }

    } else {
      header.style.top = '0';
      if (sidepanel) {
        sidepanel.style.top = '80px';
        sidepanel.style.height = 'calc(100vh - 80px)';
      }
    }
    lastScroll = currentScroll;
  });

  // Hover Animation for Socials
  document.querySelectorAll(".footer-icon").forEach(link => { 
    link.addEventListener("mouseenter", () => {
      link.style.transform = "scale(1.2)";
      link.style.transition = "transform 0.2s ease";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1)";
    });
  });
});

