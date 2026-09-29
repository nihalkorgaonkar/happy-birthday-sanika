const floatingElements = ['❤️', '🪷', '✨', '💖', '💮'];

function createFloatingElement() {
    const el = document.createElement('div');
    el.classList.add('floating-item');
    el.innerHTML = floatingElements[Math.floor(Math.random() * floatingElements.length)];
    
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = Math.random() * 3 + 4 + 's';
    
    // Add some random size variation
    const size = Math.random() * 1.5 + 1;
    el.style.fontSize = size + 'rem';
    
    document.body.appendChild(el);
    
    setTimeout(() => {
        el.remove();
    }, 7000);
}

// Generate elements continuously
setInterval(createFloatingElement, 400);
