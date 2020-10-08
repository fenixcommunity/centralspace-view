import React from 'react'

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

const Step = ({ }) => {
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

Step.propTypes = propTypes;

export default Step;
