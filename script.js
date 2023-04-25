const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
console.log(slides);

next.addEventListener('click', () => {
    for(const slide of slides) {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
    }
})
prev.addEventListener("click", () => {
    for(const slide of slides) {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
    }
});




