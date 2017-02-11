$(document).ready(function () {
    $('.js-tilt').tilt({
        maxTilt: 9,
        glare: true,
        maxGlare: .5,
        scale: 1.05
    });

    var seriesItems = $('.js-series-item');

    seriesItems.hover(function(){
        $(this).removeClass('series-item-mouse-out');
        $(this).addClass('series-item-mouse-in');
    }, function(){
        $(this).removeClass('series-item-mouse-in');
        $(this).addClass('series-item-mouse-out');
    });
});