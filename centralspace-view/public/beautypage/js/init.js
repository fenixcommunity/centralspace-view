(function ($) {
  $(function () {

    // Plugin initialization
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    $('.carousel').carousel({}); //some interesting options
    $('.slider').slider();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav({ 'edge': 'left' });

    // Toggle Flow Text
    var toggleFlowTextButton = $('#flow-toggle');
    toggleFlowTextButton.click(function () {
      $('#flow-text-section')
        .children('p')
        .each(function () {
          $(this).toggleClass('flow-text');
        });
    });

  });
})(jQuery); 
