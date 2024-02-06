/**
 * Author: Alejandro Santos García
 *
 * Github: https://github.com/asantinos/spacex-responsive-with-form.git
 */

// BURGER ICON ANIMATION
const burgerIcon = document.querySelector(".burger-svg");
const navMenu = document.querySelector(".nav-menu");

let menuOpen = false;

burgerIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    burgerIcon.classList.toggle("open");
    menuOpen = !menuOpen;
});

// HIDE HEADER ON SCROLL ANIMATION
let lastScrollTop = 0;
const header = document.querySelector("header");
const delta = 100;

window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // No hacer nada si el scroll es menor que delta o si el menú de navegación está abierto
    if (Math.abs(lastScrollTop - scrollTop) <= delta || menuOpen) {
        return;
    }

    if (scrollTop > lastScrollTop) {
        // Scroll hacia abajo
        header.classList.add("scroll-down");
    } else {
        // Scroll hacia arriba
        header.classList.remove("scroll-down");
    }

    lastScrollTop = scrollTop;
});
