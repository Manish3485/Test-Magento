require(['jquery', 'slick'], function($) {
    $slickSlider = false;

    function slickMobile() {
        if($(window).width() < 1025) {
            if(!$slickSlider){
                $(".gallary-images").slick({
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                });
                $slickSlider = true;
            }
        } else if($(window).width() > 1025) {
                if($slickSlider) {
                    $('.gallary-images').slick('unslick');
                    $slickSlider = false;
                }
            }
    }
    slickMobile();
    $(window).on('resize', function(){
        slickMobile();
   });
})