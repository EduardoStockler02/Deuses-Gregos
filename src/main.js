let index = 1;
function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length
    slides[index].classList.remove('active');
    index = (index + direction + totalSlides) % totalSlides;
    slides[index].classList.add('active');
}

