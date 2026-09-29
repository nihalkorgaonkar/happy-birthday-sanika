// A beautiful mix of lilies, lotuses, cherry blossoms, tulips, and hearts!
const floatingElements = ['❤️', '🪷', '🌸', '🌷', '🌺', '💖', '✨', '💮'];

function createFloatingElement() {
    const el = document.createElement('div');
    el.classList.add('floating-item');
    el.innerHTML = floatingElements[Math.floor(Math.random() * floatingElements.length)];
    
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = Math.random() * 4 + 5 + 's';
    
    // Random size variation
    const size = Math.random() * 1.5 + 1;
    el.style.fontSize = size + 'rem';
    
    document.body.appendChild(el);
    
    setTimeout(() => {
        el.remove();
    }, 9000);
}

// Generate elements continuously
setInterval(createFloatingElement, 500);

// ========== SCROLL REVEAL ANIMATIONS ==========
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all slide-up elements
document.querySelectorAll('.slide-up').forEach(el => {
    observer.observe(el);
});

// ========== PARALLAX EFFECT ON HERO ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});
