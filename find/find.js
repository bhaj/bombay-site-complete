// Optional: fade-in sections on scroll
const sections = document.querySelectorAll('.location-overlay');
const options = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.animation = 'fadeInUp 1s forwards';
    }
  });
}, options);

sections.forEach(section => observer.observe(section));

/* Animation Keyframes */
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
}`;
document.head.appendChild(style);

/* Find us form */
document.addEventListener("DOMContentLoaded", () => {
  const chatBubble = document.querySelector("#chatBubble");
  const chatPopup = document.querySelector("#chatPopup");
  const closePopup = document.getElementById("closePopup");

  if (chatBubble && chatPopup && closePopup) {

    // Open popup when bubble is clicked
    chatBubble.addEventListener("click", () => {
      chatPopup.classList.add("show");  // show popup with animation
      chatBubble.style.display = "none"; // hide bubble
    });

    // Close popup when X button is clicked
    closePopup.addEventListener("click", () => {
      chatPopup.classList.remove("show");  // hide popup with animation
      setTimeout(() => {
        chatBubble.style.display = "flex"; // show bubble after animation
      }, 300); // match CSS transition duration
    });
  }
});
