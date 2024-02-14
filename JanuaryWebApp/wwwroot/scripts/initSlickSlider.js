$(document).ready(function () {
    // JavaScript for navigation buttons
    let currentIndex = 0;
    const slides = $('.carousel .plan-column');

    function showSlide(index) {
        slides.each(function (i, slide) {
            if (i === index) {
                $(slide).show();
            } else {
                $(slide).hide();
            }
        });
    }

    function next() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prev() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Manual navigation
    $(document).on('click', '.manual-prev', function () {
        prev();
    });

    $(document).on('click', '.manual-next', function () {
        next();
    });

    // Initially show the first slide
    showSlide(currentIndex);
});
