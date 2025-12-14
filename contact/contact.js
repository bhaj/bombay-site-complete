// Floating block fade-in on page load
document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".contact-card");
  setTimeout(() => {
    card.classList.add("visible");
  }, 50);
});

// Form submission
const form = document.querySelector(".contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    status.textContent = "Thanks for your message!";
    form.reset();
  } else {
    status.textContent = "Oops! There was a problem.";
  }
});
