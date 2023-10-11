/* toggle icon navbar */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




/*==================Scroll Sections active Link ============================== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')


window.addEventListener('scroll', () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        } else {
            document.querySelector(`header nav a[href*='${id}']`).classList.remove('active');
        }
    });
});


 /*===============================Scroll reveal ==================================*/



 ScrollReveal({ reset: true, distance: '80px', duration: 2000, delay: 200 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .Services-container, .Portfolio-box, .Contact', { origin: 'top' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
 