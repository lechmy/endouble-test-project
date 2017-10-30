$(document).ready(function(){
    var img = $('.js-parallax');
    if(window.innerWidth > 767){
            $(window).scroll(function () {
                img.css("background-position", 
                "center " + (img.offset().top - (img.offset().top - $(window).scrollTop() / 2) - 25) + "px"
            )
        });
    }
})
