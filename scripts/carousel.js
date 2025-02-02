document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    // Selecciona los elementos del carousel según la opción elegida
    const slides = document.querySelectorAll('.carousel-slide > *'); // Funciona con ambas opciones
    const totalSlides = slides.length;
    const slideContainer = document.querySelector('.carousel-slide');

    function initializeCarousel() {
        slideContainer.style.width = `${totalSlides * 100}%`;
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

    // Inicializar carousel
    initializeCarousel();

    // Auto-avance
    setInterval(nextSlide, 5000);
});