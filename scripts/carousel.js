let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.carousel-container').style.transform = `translateX(${-slideWidth * index}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Cambiar de imagen automáticamente cada 5 segundos
setInterval(nextSlide, 5000);

// Mostrar la primera imagen al cargar la página
showSlide(currentIndex);