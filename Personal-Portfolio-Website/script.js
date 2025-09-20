// Smooth scrolling for navbar links
const navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission alert
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for signing up!");
    form.reset();
});
