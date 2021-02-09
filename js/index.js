// Your code goes here
// * `mouseover and mouseout
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
navLinks.forEach(el => {
    el.addEventListener('mouseover', e => {
        el.style.color = "yellow"; //change link text color to yellow when moused over
    })
    el.addEventListener('mouseout', e => {
        el.style.color = ""; //remove change to link text color when mouse is no longer over element
    })
    
})

// * `keydown`
const logoHeader = document.querySelector('.logo-heading');

document.addEventListener('keydown', e => {
    logoHeader.style.backgroundColor = 'yellow'; // change background color of logo header while key is pressed
});

// keyup
document.addEventListener('keyup', e => {
    logoHeader.style.backgroundColor = ''; // go back to normal background color when key is let up.
});

//scroll
const heroImg = document.querySelector('.intro img');
document.addEventListener('scroll', e => {
    heroImg.style.transform = 'scaleX(-1)'; //flip hero image when page is scrolled
})

//dlbclick
const images = Array.from(document.querySelectorAll('img'));
images.forEach(e => {
    e.addEventListener('dblclick', event => {
        event.target.style.opacity = "50%";
    })
})

// resize
const welcome = document.querySelector('.intro h2');
function switchBack(){
    welcome.style.color = '';
}
function flashyellow(){
    setInterval(e => {
        welcome.style.color = 'yellow';
        window.setTimeout(switchBack, 150);
    }, 300)
}
window.addEventListener('resize', flashyellow);

// * `wheel`
document.addEventListener('wheel', e => {
    images.forEach(image => {
        image.style.filter = 'grayscale(100%)';
    })
})


// * `load`
window.addEventListener('load', e => {
    alert('The Page Has Loaded!');
})

// mousemove
let welcomeFontSize = 1
document.addEventListener('mousemove', e => {
    welcomeFontSize += .01;
    welcome.style.fontSize = `${welcomeFontSize}rem`; // welcome to fun bus font grows as mouse is moved around the screen.
})