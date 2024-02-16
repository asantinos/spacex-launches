const toggleBtn = document.getElementById("toggle-mode");
const darkIcon = document.getElementById("dark-icon");
const lightIcon = document.getElementById("light-icon");

let darkMode = true;

toggleBtn.addEventListener("click", () => {
    darkMode = !darkMode;

    document.body.classList.toggle("light-mode");
    document.querySelector("footer").classList.toggle("light-mode");

    if (darkMode) {
        darkIcon.style.display = "flex";
        lightIcon.style.display = "none";
        localStorage.setItem("darkMode", "true");
    } else {
        darkIcon.style.display = "none";
        lightIcon.style.display = "flex";
        localStorage.setItem("darkMode", "false");
    }
});

// Check for dark mode preference at the beginning
const darkModePref = localStorage.getItem("darkMode");
if (darkModePref === "false") {
    toggleBtn.click();
}
