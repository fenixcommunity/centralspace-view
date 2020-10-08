import React from 'react';
import PropTypes from 'prop-types';
import '../../../../resources/beautypage/css/stepper/mstepper.css';

const propTypes = {
    XXX: PropTypes.string.isRequired,
    XXX: PropTypes.bool.isRequired,
    XXX: PropTypes.node.isRequired,
    XXX: PropTypes.func.isRequired,
    cardAction: PropTypes.arrayOf(
        PropTypes.shape({
            XXX: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const StepperLinear = ({ }) => {
    return (
        <ul className="stepper linear">
            {props.steps && props.steps.map(step => (
                step
            ))}
        </ul>
    )
}

StepperLinear.propTypes = propTypes;

export default StepperLinear;
