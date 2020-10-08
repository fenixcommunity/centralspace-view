import React from 'react';
import PropTypes from 'prop-types';
import '../../../../resources/beautypage/css/stepper/mstepper.css';

const propTypes = {
    steps: PropTypes.array.isRequired
}

const StepperLinear = ({ steps }) => {
    return (
        <ul className="stepper linear">
            {steps && steps.map(step => (
                step
            ))}
        </ul>
    )
}

StepperLinear.propTypes = propTypes;

export default StepperLinear;
