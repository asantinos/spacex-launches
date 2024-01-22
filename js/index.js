/**
 * Author: Alejandro Santos García
 *
 * Github:
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
