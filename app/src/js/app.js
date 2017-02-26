$(document).ready(function () {
    $('.js-tilt').tilt({
        maxTilt: 9,
        scale: 1.05
    });

    // movies carousel
    var moviesCarousel = $('.js-movie-carousel').owlCarousel({items: 5});

    // cartoons carousel
    var cartoonsCarousel = $('.js-cartoon-carousel').owlCarousel({items: 5});

    // series carousel
    var seriesCarousel = $('.js-series-carousel').owlCarousel({items: 3});

    // ted carousel
    var tedCarousel = $('.js-ted-carousel').owlCarousel({items: 3});

    var carouselControll = $('[data-carousel]');
    var carousels = {
        'movies': moviesCarousel,
        'cartoons': cartoonsCarousel,
        'series': seriesCarousel,
        'ted': tedCarousel
    };

    carouselControll.on('click', function () {
        var relCarousel = $(this).attr('data-carousel');
        var direction = $(this).attr('data-direction');

        carousels[relCarousel].trigger(direction + '.owl.carousel');
    });

    $('.series-details__episodes, .series-details__seasons').customScrollbar();
});