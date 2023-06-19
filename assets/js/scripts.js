let compteur = 0;
let timer, images, slides, slideWidth;

const carousel = document.querySelector("#carousel");
images = document.querySelector(".images");
slides = Array.from(images.children);

// On calcule la largeur de mon carousel
slideWidth = carousel.getBoundingClientRect().width;
// ____________________________________________________

let next = document.querySelector("#nav-droite");
let previous = document.querySelector("#nav-gauche");

next.addEventListener("click", slideNext);
previous.addEventListener("click", slidePrevious);

// Automatiser le carousel
timer = setInterval(slideNext, 4000);

// Gérer le survol de la souris
carousel.addEventListener("mouseover", stopTimer);
carousel.addEventListener("mouseout", startTimer);

function slideNext(){
    compteur++;
    if(compteur == slides.length){
        compteur = 0;
    }
    let decal = -slideWidth * compteur;
    images.style.transform = `translateX(${decal}px)`
}

function slidePrevious(){
    compteur--;
    if(compteur === -1){
        compteur = slides.length -1;
    }
    let decal = -slideWidth * compteur;
    images.style.transform = `translateX(${decal}px)`
}

function stopTimer(){
    clearInterval(timer)
}

function startTimer(){
    timer = setInterval(slideNext, 4000)
}

//____________________________________________________

// Mise en oeuvre du "responsive"

window.addEventListener("resize", () => {
    slideWidth = carousel.getBoundingClientRect().width
    slideNext()
})
//____________________________________________________