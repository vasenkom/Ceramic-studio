//Slideshow script
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    };
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    };
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    setTimeout(showSlides, 5000);
}

let infoButton = document.querySelector('.infoButton');
let myPopUp = document.querySelector('#myPopup');
let closeButton = document.querySelector('.closePopup');

function show() {
    myPopUp.classList.add('show');
};

function closePopUp() {
    myPopUp.classList.remove("show");
}

window.addEventListener('click', function (event) {
    if (event.target == myPopUp) {
        myPopUp.classList.remove("show");
    }
});