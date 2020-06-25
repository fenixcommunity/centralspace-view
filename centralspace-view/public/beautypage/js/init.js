(function ($) {
  $(function () {

    // Plugin initialization
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    $('.carousel').carousel({}); //some interesting options
    $('.slider').slider();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav({ 'edge': 'left' });

    var rangeSlider = $('#range-slider')[0];
    noUiSlider
      .create(rangeSlider, {
        start: [20, 80],
        connect: true,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: {
          'min': 0,
          'max': 100
        },
        format: wNumb({
          decimals: 0
        })
      });

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
