// Typing Effect for Home Section
const typingEffect = document.getElementById('typing-effect');
const typingName = document.getElementById('typing-name');
const typingDesignation = document.getElementById('typing-designation');

typingEffect.textContent = "Hello there!";
typingName.textContent = "I'm Javaram Mali";
typingDesignation.textContent = "Product Manager";

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  alert(`Thank you, ${name}! Your message has been sent.`);
});