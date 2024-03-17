
const slideController = function slideController() {
    let active_slide = 0;
    const num_slides = 3;

    const showSlide = function showSlide(slide_index) {
        // check index bounds
        if (slide_index < 0 || slide_index >= num_slides) {
            return 'Error: slide index out of bounds';
        }

        // change the active slide index
        active_slide = slide_index;

        // change the active slide dot
        const active_dot = document.querySelector('.dot.active');
        active_dot.classList.remove('active');

        const slide_dots = document.querySelectorAll('.dot');
        slide_dots[active_slide].classList.add('active');

        // hide the currently revealed slide
        const current_slide = document.querySelector('.slide.reveal');
        current_slide.classList.remove('reveal');

        // show the new slide
        const slides = document.querySelectorAll('.slide');
        slides[active_slide].classList.add('reveal');
    };

    const next = function next() {
        new_slide = (active_slide + 1) % num_slides;
        showSlide(new_slide);
    };

    const prev = function prev() {
        new_slide = mod(active_slide - 1, num_slides);
        showSlide(new_slide);
    };

    // helper modulus function for prev()
    function mod(n, m) {
        "use strict";
        return ((n % m) + m) % m;
    }

    return { showSlide, next, prev }
}();

const pageController = function pageController() {
    const initializePage = function initializePage() {
        // initialize the page by doing the following . . .
        // - setup the drop-down menu animation
        // - setup the slide arrows to show the prev / next image
        // - setup the slide dots to show the selected image
        setupDropDownMenu();
        setupSlideArrows();
        setupSlideDots();
    }

    function setupSlideArrows() {
        // DOM references
        const prev_arrow = document.querySelector('#prev');
        const next_arrow = document.querySelector('#next');

        // show previous image on prev-arrow click
        prev_arrow.addEventListener('click', () => {
            slideController.prev();
        });

        // show next image on next-arrow click
        next_arrow.addEventListener('click', () => {
            slideController.next();
        });
    }

    function setupSlideDots() {
        // DOM references
        const slide_dots = document.querySelectorAll('.dot');
        
        // when one of the dots is clicked, show the associated image
        slide_dots.forEach((dot) => dot.addEventListener('click', () => {
            const slide_index = dot.dataset.index;
            slideController.showSlide(slide_index);
        }));
    }

    function setupDropDownMenu() {
        // DOM references
        const drop_down_container = document.querySelector('.drop-down-container');
        const drop_down_title = document.querySelector('.drop-down-title');
        const drop_down_menu = document.querySelector('.drop-down-menu');
    
        // toggle the visibility of the drop-down menu when the title is clicked
        drop_down_title.addEventListener('click', () => {
            drop_down_menu.classList.toggle('reveal');
        });
    
        // if the user clicks outside the drop-down menu, hide it
        window.addEventListener("click", (e) => {
            if (!drop_down_container.contains(e.target)) {
                drop_down_menu.classList.remove("reveal");
            }
        });
    }

    return { initializePage }
}();

// run / debug
pageController.initializePage();