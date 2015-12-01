$(document).ready(function(){
  $('.warrior-carousel').slick({
    slidesToShow: 1,
  });

/* --------- PARALLAX -------- */

  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /10 +'%)'
    });

    $('.warrior-foreground').css({
      'transform' : 'translate(0px, -'+ wScroll /60 +'%)'
    });
  });

  var wScroll = $(this).scrollTop();

  if(wScroll > $('.column').offset().top - ($(window).height() / 1.1)) {

    $('.column img').each(function(i){

      setTimeout(function(){
        $('.column img').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  }
 });





