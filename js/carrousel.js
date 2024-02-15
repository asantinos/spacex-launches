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
