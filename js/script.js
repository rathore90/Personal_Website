// $(document).ready(function(){
    
//     // Detect request animation frame
//     var scroll = window.requestAnimationFrame ||
//     // IE Fallback
//     function(callback){ window.setTimeout(callback, 1000/60)};
//     var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
//     var elementsToflip = document.querySelectorAll('.flip-scroll'); 

//     function loop() {

//         Array.prototype.forEach.call(elementsToShow, function(element){
//         if (isElementInViewport(element)) {
//         element.classList.add('is-visible');
//         } 
//         });

//         // flip on scroll
//         Array.prototype.forEach.call(elementsToflip, function(element){
//             if (isElementInViewport(element)) {
//             element.classList.add('card-flip');
//             } 
//         });

//         scroll(loop);
//     }

//     // Call the loop for the first time
//     loop();

//     // Helper function from: http://stackoverflow.com/a/7557433/274826
//     function isElementInViewport(el) {
//         // special bonus for those using jQuery
//         if (typeof jQuery === "function" && el instanceof jQuery) {
//         el = el[0];
//         }
//         var rect = el.getBoundingClientRect();
//         return (
//         (rect.top <= 0
//         && rect.bottom >= 0)
//         ||
//         (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.top <= (window.innerHeight || document.documentElement.clientHeight))
//         ||
//         (rect.top >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
//         );
//     }

//     $(window).scroll(function(){
//         if(this.scrollY > 20){
//             $('.navbar-custom').addClass("sticky");
//         }else{
//             $('.navbar-custom').removeClass("sticky");
//         }
//         if(this.scrollY > 500){
//             $('.scroll-up-btn').addClass("show");
//         }else{
//             $('.scroll-up-btn').removeClass("show");
//         }
//     });

//     //animation
//     var typed= new Typed(".typing", {
//         strings: ["software developer", "husband", "father", "student", "freelancer", "web developer", "cook"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     var typed= new Typed(".typing2", {
//         strings: ["software developer", "husband", "father", "student", "freelancer", "web developer", "cook"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     // toggle menu/navbar
//     $('.menu-btn').click(function(){
//         $('.navbar-custom .menu').toggleClass("active");
//         $('.menu-btn .cross').toggleClass("active");
//         $('.menu-btn .bars').toggleClass("hidden");
//     });

//     $('.a-tag').click(function(){
//         $('.navbar-custom .menu').toggleClass("active");
//         $('.menu-btn .cross').toggleClass("active");
//         $('.menu-btn .bars').toggleClass("hidden");
//     });

//     $('.menu li').click(function(){
//         $('.menu li').removeClass('active');
//       $(this).addClass('active');
//     })


//     // owl carousel script
//     $('.carousel').owlCarousel({
//         margin: 20,
//         loop: true,
//         autoplay: true,
//         autoplayTimeOut: 1000,
//         autoplayHoverPause: true,
//         responsive: {
//             0:{
//                 items: 1,
//                 nav: false
//             },
//             600:{
//                 items: 2,
//                 nav: false
//             },
//             1000:{
//                 items: 3,
//                 nav: false
//             }
//         }
//     });
// });


$(document).ready(function(){var t=window.requestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},o=document.querySelectorAll(".show-on-scroll"),n=document.querySelectorAll(".flip-scroll");function s(e){"function"==typeof jQuery&&e instanceof jQuery&&(e=e[0]);e=e.getBoundingClientRect();return e.top<=0&&0<=e.bottom||e.bottom>=(window.innerHeight||document.documentElement.clientHeight)&&e.top<=(window.innerHeight||document.documentElement.clientHeight)||0<=e.top&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)}!function e(){Array.prototype.forEach.call(o,function(e){s(e)&&e.classList.add("is-visible")}),Array.prototype.forEach.call(n,function(e){s(e)&&e.classList.add("card-flip")}),t(e)}(),$(window).scroll(function(){20<this.scrollY?$(".navbar-custom").addClass("sticky"):$(".navbar-custom").removeClass("sticky"),500<this.scrollY?$(".scroll-up-btn").addClass("show"):$(".scroll-up-btn").removeClass("show")});new Typed(".typing",{strings:["software developer","husband","father","student","freelancer","web developer","cook"],typeSpeed:100,backSpeed:60,loop:!0}),new Typed(".typing2",{strings:["software developer","husband","father","student","freelancer","web developer","cook"],typeSpeed:100,backSpeed:60,loop:!0});$(".menu-btn").click(function(){$(".navbar-custom .menu").toggleClass("active"),$(".menu-btn .cross").toggleClass("active"),$(".menu-btn .bars").toggleClass("hidden")}),$(".a-tag").click(function(){$(".navbar-custom .menu").toggleClass("active"),$(".menu-btn .cross").toggleClass("active"),$(".menu-btn .bars").toggleClass("hidden")}),$(".menu li").click(function(){$(".menu li").removeClass("active"),$(this).addClass("active")}),$(".carousel").owlCarousel({margin:20,loop:!0,autoplay:!0,autoplayTimeOut:1e3,autoplayHoverPause:!0,responsive:{0:{items:1,nav:!1},600:{items:2,nav:!1},1e3:{items:3,nav:!1}}})});
