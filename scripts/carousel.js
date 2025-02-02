document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;
    const slideContainer = document.querySelector('.carousel-slide');

    // Set initial state
    function initializeCarousel() {
        // Set width of carousel-slide to accommodate all images
        slideContainer.style.width = `${totalSlides * 100}%`;
        
        // Set each image width to be proportional
        slides.forEach(slide => {
            slide.style.width = `${100 / totalSlides}%`;
        });
        
        showSlide(currentIndex);
    }

    function showSlide(index) {
        const offset = -index * (100 / totalSlides);
        slideContainer.style.transform = `translateX(${offset}%)`;
        currentIndex = index;
    }

    window.nextSlide = function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    };

    window.prevSlide = function() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    };

    // Initialize carousel
    initializeCarousel();

    // Auto advance slides
    setInterval(nextSlide, 5000);
});