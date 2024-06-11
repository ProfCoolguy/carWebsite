const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');
let heroBg = document.querySelector('.hero');

setInterval(() => {
    heroBg.style.backgroundImage = "url(img/bg-light.jpg)"
    
    setTimeout(() => {
        heroBg.style.backgroundImage = "url(img/bg.jpg)"
    }, 1000);
}, 2200);

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

window.addEventListener("scroll", function() {
        var nav = document.querySelector("header");
        if (window.scrollY > 1) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
});

toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');
    toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

document.querySelectorAll('header a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});