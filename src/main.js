let index = 0;
const slides = document.querySelectorAll('.carousel .item');
const totalSlides = slides.length;


function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length

    slides[index].classList.remove('active');
    index = (index + direction + totalSlides) % totalSlides;
    slides[index].classList.add('active');
}

slides[index].classList.add('active');

document.addEventListener('keydown', (event)=>{
    if (event.key === 'ArrowRight') {
        moveSlide(1);
    }
    else if(event.key === 'ArrowLeft') {
        moveSlide(-1);
    }
});