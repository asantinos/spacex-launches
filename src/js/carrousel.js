const slides = document.querySelectorAll(".carrousel-slide");
const nextSlideBtn = document.querySelector(".btn-next");
const prevSlideBtn = document.querySelector(".btn-prev");

let currentSlide = 0;
let maxSlide = slides.length - 1;

const updateSlidePosition = () => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
};

nextSlideBtn.addEventListener("click", () => {
    if (currentSlide === maxSlide) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    updateSlidePosition();
});

prevSlideBtn.addEventListener("click", () => {
    if (currentSlide === 0) {
        currentSlide = maxSlide;
    } else {
        currentSlide--;
    }

    updateSlidePosition();
});

updateSlidePosition();

// Autoplay carrousel
const playBtn = document.querySelector(".btn-play");
const pauseBtn = document.querySelector(".btn-pause");

// intervalId is a global variable to be able to clear the interval
let intervalId = null;

const playCarrousel = () => {
    intervalId = setInterval(() => {
        nextSlideBtn.click();
    }, 3000);
};

const pauseCarrousel = () => {
    clearInterval(intervalId);
};

playBtn.addEventListener("click", () => {
    playCarrousel();
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
});

pauseBtn.addEventListener("click", () => {
    pauseCarrousel();
    pauseBtn.style.display = "none";
    playBtn.style.display = "block";
});

playCarrousel();

// Modal view for images in the carrousel and close when clicking outside the image
const modal = document.getElementById("carrousel-modal");
const carrouselImages = document.querySelectorAll(".carrousel-image");
const modalImg = document.getElementById("modal-image");

carrouselImages.forEach((image) => {
    image.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });
});

const closeBtn = document.querySelector(".modal-close");
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
