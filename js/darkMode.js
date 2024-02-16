const toggleBtn = document.getElementById("toggle-mode");
const darkIcon = document.getElementById("dark-icon");
const lightIcon = document.getElementById("light-icon");

let darkMode = true;

toggleBtn.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode");

    if (darkMode) {
        darkIcon.style.display = "flex";
        lightIcon.style.display = "none";
    } else {
        darkIcon.style.display = "none";
        lightIcon.style.display = "flex";
    }
});
