import React from 'react';

function StepperLinear(props) {
    return (
        <ul className="stepper linear">
            {props.steps && props.steps.map(step => (
                step
            ))}
        </ul>
    )
}

export default StepperLinear;
