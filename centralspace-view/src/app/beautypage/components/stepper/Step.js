import React from 'react'

function Step(props) {
    const headerWaves = props.headerWaves ? "waves-effect waves-dark" : "";
    return (
        <li className={`step ${props.active ? "active" : ""}`}>
            <div className={`step-title ${headerWaves}`}>{props.header}</div>
            <div className="step-content">
                <div className="row">
                    {props.content}
                </div>
                <div className="step-actions">
                    {props.stepActions && props.stepActions.map(action => (
                        action
                    ))}
                </div>
            </div>
        </li>
    )
}

export default Step;
