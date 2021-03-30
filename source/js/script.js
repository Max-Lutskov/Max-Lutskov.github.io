$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
      {
        items: 3,
          dots: true,
          dotsEach: true,
          autoplay: true,
          smartSpeed: 900,
          autoplayHoverPause:true,
            loop: true,
          responsiveClass: true,
          responsive: {

            0:{
                items: 1,
                nav: true
            },
              700:{
                items: 2,
                  nav:false
              },

              900:{
                items:3,
                  nav:true,
                  loop: false
              }


          }

      }
  );

    $('.header__burger').click(function (){
        $('.header__burger,.menu-header').toggleClass('active')
        $('body').toggleClass('lock');
    });

});