$(document).ready(function () {
    // Initialize Slick slider with responsive settings
    $('#vacationTableSlider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 1, // Show only 1 slide on smaller screens
                    slidesToScroll: 1
                }
            }
        ]
    });
});