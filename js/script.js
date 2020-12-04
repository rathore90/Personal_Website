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
});