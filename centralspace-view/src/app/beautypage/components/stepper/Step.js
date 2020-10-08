import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    header: PropTypes.string,
    headerWaves: PropTypes.bool,
    active: PropTypes.bool,
    content: PropTypes.node.isRequired,
    stepActions: PropTypes.array
}

const Step = ({ header, headerWaves, active, content, stepActions }) => {
    const headerWaves = headerWaves ? "waves-effect waves-dark" : "";
    return (
        <li className={`step ${active ? "active" : ""}`}>
            <div className={`step-title ${headerWaves}`}>{header}</div>
            <div className="step-content">
                <div className="row">
                    {content}
                </div>
                <div className="step-actions">
                    {stepActions && stepActions.map(action => (
                        action
                    ))}
                </div>
            </div>
        </li>
    )
}

Step.propTypes = propTypes;

export default Step;
