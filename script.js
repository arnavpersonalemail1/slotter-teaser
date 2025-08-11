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

// Testimonial slider logic
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

// Animate mockup image on scroll
const mockupSection = document.querySelector('.mockup-section');
const mockupImage = document.querySelector('.mockup img');

function checkMockupVisibility() {
  const rect = mockupSection.getBoundingClientRect();
  if(rect.top < window.innerHeight - 150) {
    mockupImage.classList.add('visible');
  }
}

window.addEventListener('scroll', checkMockupVisibility);
window.addEventListener('load', checkMockupVisibility);

// Email form submission (no backend, just thank you message)
document.getElementById('emailForm').addEventListener('submit', e => {
  e.preventDefault();
  const emailInput = e.target.email;
  if(emailInput.value.trim()) {
    alert(`Thanks for signing up, ${emailInput.value.trim()}! We’ll notify you when Shiftly launches.`);
    emailInput.value = '';
  }
});
