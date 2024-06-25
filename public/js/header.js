const header = document.querySelector('header');
let indexTop;

document.addEventListener('scroll', (e) => {
    if(window.scrollY > indexTop){
        header.style.top = '-70px';
        indexTop = window.scrollY;;
    } else{
        header.style.top = '0';
        indexTop = window.scrollY;;
    }
});

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('animation-hamburger');
    document.querySelector('.menu-header').classList.toggle('active-menu');
})