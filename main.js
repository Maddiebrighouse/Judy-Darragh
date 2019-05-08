$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.second-page').offset().top }, 'slow');
      return false;
    });
  });

  $(function() {
    $('.scroll-up').click (function() {
      $('html, body').animate({scrollTop: $('section.landing-page').offset().top }, 'slow');
      return false;
    });
  });