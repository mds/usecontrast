$( document ).ready(function() {

  // Dynamic copyright in the footer
  var now = new Date();
  var year = now.getFullYear();
  $('.copyright').html('©'+year);

  // animation for app colors
  function animateApp(){

    setTimeout(function () {
      $('.contrast-showcase .contrast-app').addClass('contrast-app-var-1');
      $('.contrast-showcase .contrast-app-score').html('AAA');
      $('.contrast-showcase .contrast-app-input--foreground').html('001F3F');
      $('.contrast-showcase .contrast-app-input--background').html('01FF70');
      $('.contrast-showcase .contrast-app-ratio').html('12.26');
    }, 1000); 

    setTimeout(function () {
      $('.contrast-showcase .contrast-app').removeClass('contrast-app-var-1');
      $('.contrast-showcase .contrast-app').addClass("contrast-app-var-2");
      $('.contrast-showcase .contrast-app-score').html('AA');
      $('.contrast-showcase .contrast-app-input--foreground').html('85144B');
      $('.contrast-showcase .contrast-app-input--background').html('FF851B');
      $('.contrast-showcase .contrast-app-ratio').html('3.92');
    }, 3000);

    setTimeout(function () {
      $('.contrast-showcase .contrast-app').removeClass('contrast-app-var-2');
      $('.contrast-showcase .contrast-app').addClass("contrast-app-var-3");
      $('.contrast-showcase .contrast-app-score').html('AA+');
      $('.contrast-showcase .contrast-app-input--foreground').html('01FF70');
      $('.contrast-showcase .contrast-app-input--background').html('0074D9');
      $('.contrast-showcase .contrast-app-ratio').html('3.45'); 
    }, 5000);

    setTimeout(function () {
      $('.contrast-showcase .contrast-app').removeClass('contrast-app-var-3');
      $('.contrast-showcase .contrast-app').addClass("contrast-app-var-4");
      $('.contrast-showcase .contrast-app-score').html('AA');
      $('.contrast-showcase .contrast-app-input--foreground').html('111111');
      $('.contrast-showcase .contrast-app-input--background').html('F012BE');
      $('.contrast-showcase .contrast-app-ratio').html('4.98');
    }, 7000);


    setTimeout(function () {
      $('.contrast-showcase .contrast-app').removeClass('contrast-app-var-4');
      $('.contrast-showcase .contrast-app').addClass("contrast-app-var-5");
      $('.contrast-showcase .contrast-app-score').html('Fail');
      $('.contrast-showcase .contrast-app-input--foreground').html('FFFFFF');
      $('.contrast-showcase .contrast-app-input--background').html('FF5699');
      $('.contrast-showcase .contrast-app-ratio').html('2.98');
    }, 9000);

    setTimeout(function () {
      $('.contrast-showcase .contrast-app').removeClass('contrast-app-var-5');
      $('.contrast-showcase .contrast-app').addClass("contrast-app-var-6");
      $('.contrast-showcase .contrast-app-score').html('AA+');
      $('.contrast-showcase .contrast-app-input--foreground').html('FFFFFF');
      $('.contrast-showcase .contrast-app-input--background').html('2b9a9a');
      $('.contrast-showcase .contrast-app-ratio').html('3.43');
    }, 11000);

    setTimeout(function () {
      $('.contrast-showcase .contrast-app').removeClass('contrast-app-var-6');
      $('.contrast-showcase .contrast-app').addClass("contrast-app-var-0");
      $('.contrast-showcase .contrast-app-score').html('AAA');
      $('.contrast-showcase .contrast-app-input--foreground').html('111112');
      $('.contrast-showcase .contrast-app-input--background').html('FFFF00');
      $('.contrast-showcase .contrast-app-ratio').html('17.35');
    }, 13000);

  }

  // If someone tries to click the app, wiggle the appstore button
  $('.contrast-showcase .contrast-app').click(function(){
    $('.contrast-app-store svg').addClass('jiggle');
    setTimeout(function () {
      $('.contrast-app-store svg').removeClass('jiggle');
    }, 1000);
  });

  // Hover for Diamond 1
  $('.contrast-score-display-1').mouseover(function(){
    $('.contrast-shape-diamond-1').addClass('contrast-shape-diamond-1--is-animated');
  });

  $('.contrast-score-display-1').mouseleave(function(){
    $('.contrast-shape-diamond-1').removeClass('contrast-shape-diamond-1--is-animated');
  });

  // Hover for Loupe and Diamond 2
  $('.contrast-loupe').mouseover(function(){
    $('.contrast-shape-diamond-2').addClass('contrast-shape-diamond-2--is-animated'); $('.contrast-block-2 .contrast-block-meta-score').html('6.33');
    $('.contrast-block-2 .contrast-block-meta-score').addClass('contrast-block-meta-score--is-animated');
    $('.contrast-block-2 .contrast-block-meta-hex-1').html('#FF5699');
    $('.contrast-block-2').addClass('contrast-block-2--is-animated');
  });

  $('.contrast-loupe').mouseleave(function(){
    $('.contrast-shape-diamond-2').removeClass('contrast-shape-diamond-2--is-animated');
    $('.contrast-block-2 .contrast-block-meta-score').html('7.09');
    $('.contrast-block-2 .contrast-block-meta-score').removeClass('contrast-block-meta-score--is-animated');
    $('.contrast-block-2 .contrast-block-meta-hex-1').html('#FFAA00');
    $('.contrast-block-2').removeClass('contrast-block-2--is-animated');
  });

  // Hover for Diamond 1
  $('.contrast-score-display-3').mouseover(function(){
    $('.contrast-shape-diamond-3').addClass('contrast-shape-diamond-3--is-animated');
  });

  $('.contrast-score-display-3').mouseleave(function(){
    $('.contrast-shape-diamond-3').removeClass('contrast-shape-diamond-3--is-animated');
  });

  // do the thing
  animateApp();

  ///////////////////////////////////////////////////////////////
  // Event Tracking 
  ///////////////////////////////////////////////////////////////

  $('.contrast-app-store').click(function(){ _gs('event', 'Clicked App Store Btn') });
  $('.contrast-showcase .contrast-app').click(function(){ _gs('event', 'Clicked the Demo App') });
  $('.contrast-press').click(function(){ _gs('event', 'Downloaded Press Kit') });



});