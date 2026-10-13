/* ==========================================================
   PORTFOLIO INTERACTIVITY SCRIPT
   ========================================================== */

// 1. Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        const icon = menuIcon.querySelector('i');
        if (icon) {
            icon.classList.toggle('bx-menu');
            icon.classList.toggle('bx-x');
        }
    });

    // Close menu when clicking any nav link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            const icon = menuIcon.querySelector('i');
            if (icon) {
                icon.classList.add('bx-menu');
                icon.classList.remove('bx-x');
            }
        });
    });
}

// 2. Active Navigation Link on Scroll (Scroll Spy)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});

// 3. Typing Effect Animation
const words = [
    'Diploma in CS Student',
    'Internship Applicant',
    'Figma & UX Designer',
    'Treasurer @ ISO'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');

function typeEffect() {
    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 110;

    if (!isDeleting && charIndex === currentWord.length) {
        // Pause at full word
        typingSpeed = 1600;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Switch to next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing animation once the page loads
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
});
