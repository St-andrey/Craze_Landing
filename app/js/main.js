$(function () {
    $('.slider__testimonials').slick({
        dots: true,
        arrows: false,
        dotsClass: "my-dots",
    });

    
    
    var footer = gsap.timeline()

    footer
    // .from('.footer', {yPercent: 50, background: 'transparent'})
    .from('.footer__nav', 1,  {x: -300, background: 'black', justifyContent: 'flex-start'})
//    .from('.footer__nav-item', {duration: 2, xPercent: -1000, scaleY: 0})
    .from('.footer__nav .footer__nav-link', {height: 0, x: -100, color: 'red', stagger: 2}, '+=2')

var socials = gsap.timeline()
    .from('.main-socials', {color: 'red'})
    .from('.main-socials__box .main-socials__link', {y: 30, duration: 0.3, color: 'green', stagger: 0.3, ease: 'bounce' })

    


    

    // var footer = gsap.timeline()
    // footer
    //     .fromTo('.features__box', 0.6, { opacity: 0, scale: 0.1}, { opacity: 1, scale: 1})
    //     .fromTo('.footer__nav', 2, { yPercent: -10, xPercent: 20, scale: 2 }, { yPercent: -90, xPercent: 25, scale: 2.3 })
    //     .fromTo('.journey-parallax-decor--bottom', 2, { yPercent: -10, xPercent: 0 , scale: 1.2}, { yPercent: -200, xPercent: 0, scale: 1.8 }, '<')


        // var controller = new ScrollMagic.Controller();
    // var parallaxScene = new ScrollMagic.Scene({
    //     triggerElement: '.header',
    //     triggerHook: 0.5,
    //     duration: '100%'
    // })
    //     .addIndicators({
    //         name: 'parallax scene',
    //         colorTrigger: 'blue',
    //         colorStart: 'green',
    //         colorEnd: 'yellow',
    //         indent: 5
    //     })

    //     .setTween(journeytl)
    //     .addTo(controller);
     
});

