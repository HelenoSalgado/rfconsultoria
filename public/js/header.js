const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
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

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('animation-hamburger');
    document.querySelector('.menu-header').classList.toggle('active-menu');
});

// Plus and Minus list card
let listExtend = document.querySelector('.list-extend');
let menuCard = document.querySelector('.menu-card');
let width = window.visualViewport.width;

listExtend.addEventListener('mouseenter', () => {
    if(width > 750) menuCard.classList.toggle('menu-card-show');
});
listExtend.addEventListener('mouseleave', () => {
    if(width > 750) menuCard.classList.toggle('menu-card-show');
});

listExtend.addEventListener('click', () => {
    if(width < 750){
        menuCard.classList.toggle('menu-card-show');
        if(menuCard.classList.toggle(true)){
            document.querySelector('.plus').style.opacity = '0';
        }else{
            document.querySelector('.plus').style.opacity = '10';
        }
    }
});

// Extend reponse in question
document.querySelectorAll('.question-header').forEach((element, i) => {
    element.addEventListener('click', () => {

        let height = document.querySelectorAll('.response > p')[i].clientHeight;
        // Set variable css value
        document.querySelector(':root').style.setProperty('--response-height', `calc(${height}px + 2rem)`);

        document.querySelectorAll('.question-btn').forEach((element, iBtn) => {
            if(i != iBtn) element.classList.remove('question-btn-extend');
        });
        document.querySelectorAll('.response').forEach((element, key) => {
            if(i == key) return element.classList.toggle('response-height');
            element.classList.remove('response-height');
        });
        document.querySelectorAll('.question-btn')[i].classList.toggle('question-btn-extend');
    });
});