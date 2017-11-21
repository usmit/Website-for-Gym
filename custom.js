var owl = $('.owl-carousel.featuredProductsSlider');
var owlCarouselTimeout = 2500;
owl.owlCarousel({
    loop: true,
    margin: 25,
    autoplay: true,
    autoplayTimeout: owlCarouselTimeout,
    autoplayHoverPause: false,
    nav: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    moveSlides: 4,
    dots: false,
    responsive: {
        320: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        }
    }
});
owl.on('mouseleave',function(){
    owl.trigger('stop.owl.autoplay'); //this is main line to fix it
    owl.trigger('play.owl.autoplay', [owlCarouselTimeout]);
})
;