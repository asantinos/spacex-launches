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
    if (!menuOpen) {
        navMenu.classList.add("active");
        menuOpen = true;
    } else {
        navMenu.classList.remove("active");
        menuOpen = false;
    }
});
