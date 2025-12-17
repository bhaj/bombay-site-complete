document.addEventListener('DOMContentLoaded', function() {
    let hasScrolled = false;

    // Handles the first scroll from the user
    function handleFirstScroll() {
        if (!hasScrolled) {
            hasScrolled = true;
            const cateringSection = document.querySelector('.catering-main');
            if (cateringSection) {
                smoothScrollTo(cateringSection.offsetTop);
            }
            window.removeEventListener('scroll', handleFirstScroll);
        }
    }

    // Smooth scroll animation
    function smoothScrollTo(targetY) {
        const startY = window.scrollY;
        const distance = targetY - startY;
        const duration = 1500;

        document.body.style.overflow = 'hidden';

        let startTime = null;
        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            window.scrollTo(0, startY + distance * ease);

            if (elapsed < duration) {
              requestAnimationFrame(animation);
            } else {
              document.body.style.overflow = 'auto';
            }
        }

        requestAnimationFrame(animation);
    }
    window.addEventListener('scroll', handleFirstScroll);
});

// Fade text in when scrolling
document.addEventListener("DOMContentLoaded", () => {
  const fadeText = document.querySelectorAll(".fade-text");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  fadeText.forEach(el => observer.observe(el));


  // Smooth scroll on link click in #section04
  var scrollLink = document.querySelector('#section04 a[href*="#"]');
  if (scrollLink) {
      scrollLink.addEventListener('click', function(e) {
          e.preventDefault();
          window.scrollBy(0, 100);
      });
  }
});