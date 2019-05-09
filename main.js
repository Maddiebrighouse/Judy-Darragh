// enables the down link to scroll from he main page to the second page.
$(function() {
    $('.down').click (function() {
      $('html, body').animate({scrollTop: $('section.second-page').offset().top }, 'slow');
      return false;
    });
  });

  // enables the up link/button to scroll from second page to the main landing page.
  $(function() {
    $('.up').click (function() {
      $('html, body').animate({scrollTop: $('section.landing-page').offset().top }, 'slow');
      return false;
    });
  });