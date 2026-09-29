// Hearts pop WAY more frequently, flowers are sprinkled in
const floatingElements = [
    '❤️', '❤️', '❤️', '❤️', '💖', '💖', '💗',  // hearts dominate
    '🪷', '🌸', '🌷', '🌺', '✨', '💮'           // flowers + sparkles
];

const animClasses = ['float-anim-1', 'float-anim-2', 'float-anim-3'];

function createFloatingElement() {
    const el = document.createElement('div');
    el.classList.add('floating-item');
    // Pick a random animation variant for variety
    el.classList.add(animClasses[Math.floor(Math.random() * animClasses.length)]);
    el.innerHTML = floatingElements[Math.floor(Math.random() * floatingElements.length)];

    el.style.left = Math.random() * 100 + 'vw';
    // Randomize speed
    el.style.animationDuration = (Math.random() * 3 + 4) + 's';

    // Random size
    const size = Math.random() * 1.5 + 0.8;
    el.style.fontSize = size + 'rem';

    document.body.appendChild(el);

    setTimeout(() => {
        el.remove();
    }, 8000);
}

// Much higher frequency — a new element every 200ms
setInterval(createFloatingElement, 200);

// ========== SCROLL REVEAL ANIMATIONS ==========
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.slide-up').forEach(el => {
    observer.observe(el);
});

// ========== PARALLAX ON HERO ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});
