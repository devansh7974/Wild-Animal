

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active nav on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 100; // adjust offset
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// Simple form validation example
const forms = document.querySelectorAll('.join-form');
forms.forEach(form => {
  form.addEventListener('submit', e => {
    const requiredFields = form.querySelectorAll('[required]');
    let valid = true;
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        valid = false;
        field.style.border = '1px solid red'; // highlight error
      } else {
        field.style.border = '1px solid white';
      }
    });
    if (!valid) e.preventDefault();
  });
});

// Join Us checkbox selection (optional enhancement)
const checkboxes = document.querySelectorAll('.checkbox-wrap input');
checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    checkboxes.forEach(box => {
      if (box !== cb) box.checked = false; // only one membership type allowed
    });
  });
});
