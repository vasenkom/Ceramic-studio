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

//PopUp buttons
let infoButton = document.querySelector('.infoButton');
let myPopUp1 = document.querySelector('#myPopup1');
let myPopUp2 = document.querySelector('#myPopup2');
let myPopUp3 = document.querySelector('#myPopup3');
let closeButton = document.querySelector('.closePopup');

function show1() {
    myPopUp1.classList.add('show');
};
function show2() {
    myPopUp2.classList.add('show');
};
function show3() {
    myPopUp3.classList.add('show');
};


function closePopUp1() {
    myPopUp1.classList.remove("show");
}
function closePopUp2() {
    myPopUp2.classList.remove("show");
}
function closePopUp3() {
    myPopUp3.classList.remove("show");
}

window.addEventListener('click', function (event) {
    if (event.target == myPopUp) {
        myPopUp.classList.remove("show");
    }
});