// Animate fade-slide elements on scroll into view
const fadeSlideEls = document.querySelectorAll('.fade-slide');

function checkVisibility() {
  fadeSlideEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Testimonial slider logic (if you add testimonials later)
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

function nextTestimonial() {
  currentTestimonial++;
  if(currentTestimonial >= testimonials.length) currentTestimonial = 0;
  showTestimonial(currentTestimonial);
}

setInterval(nextTestimonial, 4000);

// Animate mockup image on scroll (if you add mockup later)
const mockupSection = document.querySelector('.mockup-section');
const mockupImage = document.querySelector('.mockup img');

function checkMockupVisibility() {
  if (!mockupSection || !mockupImage) return;
  const rect = mockupSection.getBoundingClientRect();
  if(rect.top < window.innerHeight - 150) {
    mockupImage.classList.add('visible');
  }
}

window.addEventListener('scroll', checkMockupVisibility);
window.addEventListener('load', checkMockupVisibility);

// Email form submission with validation and Google Forms submission
const emailForm = document.getElementById('emailForm');
const formMessage = document.getElementById('formMessage');

emailForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent default form submission to do validation first

  const emailInput = this.querySelector('input[name="entry.1082062929"]');
  const email = emailInput.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.style.color = 'red';
    emailInput.focus();
    return;
  }

  formMessage.textContent = 'Submitting your email...';
  formMessage.style.color = '#fff';

  // Submit form to Google Forms via hidden iframe
  this.submit();

  // After submission clear form and show thank you
  emailInput.value = '';
  setTimeout(() => {
    formMessage.textContent = 'Thank you! You are signed up.';
    formMessage.style.color = '#00ff00';
  }, 1500);
});
