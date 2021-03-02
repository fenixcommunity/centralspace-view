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
    const headerWavesClass = headerWaves ? "waves-effect waves-dark" : "";
    const contentSection = typeof (content) === 'string' ? content : (<div className="row">{content}</div>);
    return (
        <li className={`step ${active ? "active" : ""}`}>
            <div className={`step-title ${headerWavesClass}`}>{header}</div>
            <div className="step-content">
                {typeof (content) === 'string'}
                    {contentSection}
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
