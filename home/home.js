document.addEventListener('DOMContentLoaded', function() {
    let hasScrolled = false;

    // Handles the first scroll from the user
    function handleFirstScroll() {
      if (!hasScrolled) {
        hasScrolled = true;
        const storySection = document.querySelector('.content-with-sides');
        
        if (storySection) {
          smoothScrollTo(storySection.offsetTop);
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


    //slide reviews in review-tracker

    const reviewTrack = document.querySelector('.reviews-track');
    if (reviewTrack) {
      let scrollAmount = 0;
      const scrollStep = 1; // pixels to scroll each step
      const scrollInterval = 20; // milliseconds between each step
      
      // Clone the reviews for infinite scroll
      reviewTrack.innerHTML += reviewTrack.innerHTML;
      
      function scrollReviews() {
      scrollAmount += scrollStep;
      if (scrollAmount >= reviewTrack.scrollWidth / 4) {
        scrollAmount = 0;
      }
      reviewTrack.style.transform = `translateX(-${scrollAmount}px)`;
      }
      setInterval(scrollReviews, scrollInterval);
    }
});


// Auto image slider for each .image-slider
document.querySelectorAll(".image-slider").forEach(slider => {
  let images = slider.querySelectorAll("img");
  let index = 0;

  function showNext() {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }

  images[0].classList.add("active");
  setInterval(showNext, 5000);
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