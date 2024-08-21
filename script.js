// Toggle Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Close Menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => 
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
    })
);
