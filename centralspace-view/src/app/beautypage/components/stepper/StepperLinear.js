import React from 'react';
import PropTypes from 'prop-types';
import '../../../../resources/beautypage/css/stepper/mstepper.css';

const propTypes = {
    steps: PropTypes.array.isRequired,
    customClass: PropTypes.string.isRequired
}

const StepperLinear = ({ steps, customClass }) => {
    return (
        <ul className={`stepper linear ${customClass}`}>
            {steps && steps.map(step => (
                step
            ))}
        </ul>
    )
}

StepperLinear.propTypes = propTypes;

export default StepperLinear;
