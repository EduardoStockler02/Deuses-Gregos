const botaoMusica = document.getElementById("play_btn"); 
const musica = new Audio("som/song.mp3"); 

let nextDom = document.getElementById("next"); 
let prevDom = document.getElementById("prev"); 

let carouselDom = document.querySelector(".carousel"); 
let sliderDom = carouselDom.querySelector(".carousel .list");

let thumbnailBorderDom = document.querySelector(".carousel .thumbnail"); 
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item"); 
let timeDom = document.querySelector(".carousel .time");

const coresDeuses = {
    'Poseidon': {
        background: 'var(--color-primary-poseidon)',
        header: 'var(--color-primary-blue)',
        buttonColor: 'var(--color-primary-poseidon-hover)',
        bodyColor: 'var(--color-primary-poseidon)',
    },
    'Afrodite': {
        background: 'var(--color-primary-afrodite)',
        header: 'var(--color-primary-afrodite-hover)',
        buttonColor: 'var(--color-primary-afrodite-hover)',
        bodyColor: 'var(--color-primary-afrodite)',
    },
    'Zeus': {
        background: 'var(--color-primary-zeus)',
        header: 'var(--color-primary-zeus-hover)',
        buttonColor: 'var(--color-primary-zeus-hover)',
        bodyColor: 'var(--color-primary-zeus)',
    },
    'Hera': {
        background: 'var(--color-primary-hera)',
        header: 'var(--color-primary-hera-hover)',
        buttonColor: 'var(--color-primary-hera-hover)',
        bodyColor: 'var(--color-primary-hera)',
    },
    'Hades': {
        background: 'var(--color-primary-hades)',
        header: 'var(--color-primary-black)',
        buttonColor: 'var(--color-primary-hades-hover)',
        bodyColor: 'var(--color-primary-hades)',
    }
};

function mudarCoresDeus(deus) {
    const cores = coresDeuses[deus];
    document.body.style.backgroundColor = cores.bodyColor;
    document.querySelector('header').style.backgroundColor = cores.header;
    document.querySelectorAll('button').forEach(button => {
        button.style.backgroundColor = cores.buttonColor;
        button.style.color = 'white';
    });
}

document.querySelectorAll('.carousel .item').forEach(item => {
    item.addEventListener('click', () => {
        const titulo = item.querySelector('.title').innerText;
        mudarCoresDeus(titulo);
    });
});

botaoMusica.addEventListener("click", () => { 
    if (musica.paused) { 
        musica.play(); 
    } else { 
        musica.pause(); 
    } 
});

nextDom.onclick = function () { showSlider("next"); };
prevDom.onclick = function () { showSlider("prev"); };

let runTimeOut; 
let runNextAuto = setTimeout(() => nextDom.click(), timeAutonext);

function showSlider(type) { 
    let sliderItemsDom = sliderDom.querySelectorAll(".carousel .list .item"); 
    let thumbnailItemsDom = document.querySelectorAll(".carousel .thumbnail .item");

    if (type === "next") {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
    } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => nextDom.click(), timeAutonext);
}
