import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    header: PropTypes.string,
    headerWaves: PropTypes.bool,
    active: PropTypes.bool,
    content: PropTypes.node.isRequired,
    stepActions: PropTypes.array,
    onClickNextStep: PropTypes.func,
    disableNextStep: PropTypes.bool
}

const Step = ({ header, headerWaves, active, content, onClickNextStep, stepActions, disableNextStep }) => {
    const headerWavesClass = headerWaves ? "waves-effect waves-dark" : "";
    const contentSection = typeof (content) === 'string' ? content : (<div className="row">{content}</div>);
    const handleOnClick = (e) => {
        if (onClickNextStep) {
            onClickNextStep();
        }
    }

    return (
        <li className={`step ${active ? "active" : ""} ${disableNextStep ? "not-valid" : ""}`}>
            <div onClick={handleOnClick} className={`step-title ${headerWavesClass}`}>{header}</div>
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
