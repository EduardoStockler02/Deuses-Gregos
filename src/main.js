let index = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel .item');
    const totalSlides = slides.length

    slides[index].classList.remove('active');
    index = (index + direction + totalSlides) % totalSlides;
    slides[index].classList.add('active');
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        moveSlide(1);
    }
    else if (event.key === 'ArrowLeft') {
        moveSlide(-1);
    }
});
