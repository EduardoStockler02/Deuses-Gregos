let index = 0;
const slides = document.querySelectorAll('.carousel .item');
const totalSlides = slides.length;
const items = document.querySelectorAll('.carousel .item');

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

document.array.forEach(element => {
    document.addEventListener("click", () => {
        items.forEach((el) => classList.remove("active"));

        items.classList.add("active");
    })
});