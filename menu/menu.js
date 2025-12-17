document.addEventListener('DOMContentLoaded', function () {
  const SLOW_SCROLL_DURATION = 1000; 

  // Smooth scroll helper
  function smoothScrollTo(targetY, duration) {
    const headerheight = document.querySelector('header').offsetHeight;
    console.log('Header height:', headerheight);
    const startY = window.scrollY;
    const distance = targetY - startY - (headerheight * 1.1);
    let startTime = null;
    
    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }
    requestAnimationFrame(animation);
  }

  // Select DOM elements
  const sideLinks = document.querySelectorAll('.sidepanel a');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.sidepanel a');
  const sidebarToggle = document.querySelector('#sidebarToggle');
  const sidebar = document.querySelector('.sidepanel');
 // const scrollDownButton = document.querySelector('#scrollDownButton'); 

 /* if (scrollDownButton) {
   scrollDownButton.addEventListener('click', function(e) {
    e.preventDefault();
    const targetElement = document.getElementById('chicken'); 
    if (targetElement) {
      const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(targetPosition, SLOW_SCROLL_DURATION);
      console.log('Scrolled down from hero to #chicken');
    }
  }); 
  } */

  // Smooth Scroll for Sidepanel Links
  sideLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY;
          smoothScrollTo(targetPosition, SLOW_SCROLL_DURATION);

        console.log('Scrolled to:', targetId);
      } else {
        console.warn('Target not found for link:', targetId);
      }

      // Close sidebar after clicking (on small screens)
      if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        sidebarToggle.classList.remove('open');
      }
    });
  });

  // ===== Highlight Active Section in Sidepanel =====
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 20;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // ===== Sidebar Toggle for Small Screens =====
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      console.log('Sidebar Toggle Clicked - Toggling "open" class.');
      sidebar.classList.toggle('open');
      sidebarToggle.classList.toggle('open');
    });
  } else {
    console.error('SidebarToggle or Sidepanel element not found!');
  }


  // Smooth scroll on link click in #section04
  var scrollLink = document.querySelector('#section04 a[href*="#"]');
  if (scrollLink) {
      scrollLink.addEventListener('click', function(e) {
          e.preventDefault();
          window.scrollBy(0, 100);
      });
  }


  const sidepanel = document.querySelector('.sidepanel');
  const scrollThreshold = 100; // Kaç piksel kaydırıldığında tetikleneceği

  function handleScroll() {
    // window.scrollY veya document.documentElement.scrollTop, kaydırma miktarını verir.
    if (window.scrollY > scrollThreshold) {
      sidepanel.classList.add('is-scrolled');
    } else {
      // İsteğe bağlı: Geri yukarı kaydırılınca eski haline dönsün
      sidepanel.classList.remove('is-scrolled');
    }
  }

  // Sayfa kaydırıldığında handleScroll fonksiyonunu çağır
  window.addEventListener('scroll', handleScroll);

  // Sayfa yüklendiğinde de kontrol et (kullanıcı sayfayı yenilemiş olabilir)
  handleScroll();


  let hasScrolled = false;

    // Handles the first scroll from the user
    function handleFirstScroll() {
      if (!hasScrolled) {
        hasScrolled = true;
        const storySection = document.querySelector('.content');
        
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
});