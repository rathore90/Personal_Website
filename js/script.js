$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar-custom').addClass("sticky");
        }else{
            $('.navbar-custom').removeClass("sticky");
        }
    });
    // toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar-custom .menu').toggleClass("active");
        $('.menu-btn .cross').toggleClass("active");
        $('.menu-btn .bars').toggleClass("hidden");
    });

    $('.a-tag').click(function(){
        $('.navbar-custom .menu').toggleClass("active");
        $('.menu-btn .cross').toggleClass("active");
        $('.menu-btn .bars').toggleClass("hidden");
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});