import React from 'react';
import '../../../../resources/beautypage/css/stepper/mstepper.css';

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
