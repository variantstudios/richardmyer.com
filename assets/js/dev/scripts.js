$(document).ready(function() {
// Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }
  // Mobile Menu Funcation
  // $(".menu-btn").on('click touch', function() {
  //   $('.menu').toggleClass('show');
  // });

  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: true,
    itemWidth: 500,
    controlNav:false,
    slideshowSpeed:3000
  });

});
