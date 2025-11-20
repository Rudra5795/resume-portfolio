// Typing effect
const typingElement = document.getElementById("typing");
const phrases = [
    "AI/ML Enthusiast",
    "Frontend Developer",
    "Lifelong Learner",
    "Future AI Engineer"
];
let phraseIndex = 0;
let charIndex = 0;
let currentPhrase = "";
let isDeleting = false;

function type() {
    currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
        typingElement.textContent = currentPhrase.slice(0, ++charIndex);
        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        typingElement.textContent = currentPhrase.slice(0, --charIndex);
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }
    setTimeout(type, isDeleting ? 60 : 100);
}

// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Close nav when link clicked (mobile)
navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        navLinks.classList.remove("show");
    }
});

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Start typing effect
type();
