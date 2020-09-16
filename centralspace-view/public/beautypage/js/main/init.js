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
    if (rangeSlider) {
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
    }

    // Toggle Flow Text
    var toggleFlowTextButton = $('#flow-toggle');
    toggleFlowTextButton.click(function () {
      $('#flow-text-section')
        .children('p')
        .each(function () {
          $(this).toggleClass('flow-text');
        });
    });

    var stepperDiv = document.querySelector('.stepper');
    if (stepperDiv) {
      var stepper = new MStepper(stepperDiv,
        {
          firstActive: 0,
          linearStepsNavigation: true,
          autoFocusInput: true,
          showFeedbackPreloader: true,
          autoFormCreation: true,
          // validationFunction: defaultValidationFunction,
          stepTitleNavigation: true,
          feedbackPreloader: '<div class="spinner-layer spinner-blue-only">...</div>'
        }
      );
      var controlledReset = document.getElementById('controlled_reset');
      controlledReset.addEventListener('click', function () { stepper.resetStepper() })
    }

  });
})(jQuery); 
