import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    header: PropTypes.string,
    headerWaves: PropTypes.bool,
    active: PropTypes.bool,
    content: PropTypes.node.isRequired,
    stepActions: PropTypes.array,
    onClickNextStep: PropTypes.func
}

const Step = ({ header, headerWaves, active, content, onClickNextStep, stepActions }) => {
    const headerWavesClass = headerWaves ? "waves-effect waves-dark" : "";
    const contentSection = typeof (content) === 'string' ? content : (<div className="row">{content}</div>);
    return (
        <li className={`step ${active ? "active" : ""}`}>
            <div onClick={onClickNextStep} className={`step-title ${headerWavesClass}`}>{header}</div>
            <div className="step-content">
                {typeof (content) === 'string'}
                {contentSection}
                {stepActions && stepActions.map(action => (
                    <div key={action.key} className="step-actions">
                        {action}
                    </div>
                ))}
            </div>
        </li>
    )
}

Step.propTypes = propTypes;

export default Step;
