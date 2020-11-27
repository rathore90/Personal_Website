$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar-custom').addClass("sticky");
        }else{
            $('.navbar-custom').removeClass("sticky");
        }
    });
});