/* ==================== CAROUSEL SLIDER ==================== */

document.addEventListener('DOMContentLoaded', function () {

    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.recommendation-card');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;
    const totalCards = cards.length;
    let autoSlideInterval;

    // Calculate how much to slide
    function getSlideAmount() {
        if (cards.length === 0) return 0;
        const cardWidth = cards[0].offsetWidth;
        const gap = 30; // matches CSS gap
        return cardWidth + gap;
    }

    // Slide to a specific index
    function slideTo(index) {
        currentIndex = index;
        const slideAmount = getSlideAmount();
        track.style.transform = 'translateX(-' + (slideAmount * currentIndex) + 'px)';
        updateDots();
    }

    // Update active dot
    function updateDots() {
        dots.forEach(function (dot, i) {
            dot.classList.remove('active-dot');
            if (i === currentIndex) {
                dot.classList.add('active-dot');
            }
        });
    }

    // Next slide
    function nextSlide() {
        if (currentIndex < totalCards - 1) {
            slideTo(currentIndex + 1);
        } else {
            slideTo(0); // loop back to start
        }
    }

    // Dot click navigation
    dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () {
            slideTo(i);
            resetAutoSlide();
        });
    });

    // Auto-slide every 5 seconds
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Start auto-slide on page load
    startAutoSlide();

});
