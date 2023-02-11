const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const leftButton = document.querySelector('.carousel-button-left');
const rightButton = document.querySelector('.carousel-button-right');

const carouselNav = document.querySelector('.carousel-nav');
const dots = [carouselNav.children[1], carouselNav.children[2], carouselNav.children[3]];

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange slides next to eachother
const setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, leftButton, rightButton, targetIndex) => {
    if (targetIndex === 0) {
        leftButton.classList.add('is-hidden');
        rightButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        leftButton.classList.remove('is-hidden');
        rightButton.classList.add('is-hidden');
    } else {
        leftButton.classList.remove('is-hidden');
        rightButton.classList.remove('is-hidden');
    }
}

// move slides when left is clicked
leftButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = carouselNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const pervIndex = slides.findIndex(slide => slide === prevSlide);
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, leftButton, rightButton, pervIndex);
});

// move slides when right is clicked

rightButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = carouselNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, leftButton, rightButton, nextIndex);
});

// move slides when dots are clicked
carouselNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = carouselNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    if (targetIndex === -1) return;
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, leftButton, rightButton, targetIndex);
});