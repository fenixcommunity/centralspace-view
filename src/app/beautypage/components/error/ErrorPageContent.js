import React from "react";
import PropTypes from 'prop-types';

const propTypes = {
    headerText: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    goToFunc: PropTypes.func.isRequired,
    noIcon: PropTypes.bool,
    goToIconName: PropTypes.string.isRequired,
    backgroundImg: PropTypes.node.isRequired
}

const ErrorPageContent = ({ headerText, message, goToFunc, noIcon, goToIconName, backgroundImg }) => {
  
    return (
        <div className="section header">
            <img className="background" src={backgroundImg} alt="description" />
            <div className="header-wrapper row valign-wrapper">
                <div className="col s12">
                    <h3>{headerText}</h3>
                    <span className="tagline">
                        {message}
                    </span>
                    <button className="read-more" onClick={goToFunc}>
                       {!noIcon && <i className={`icon-${goToIconName}`} />} {/* simplelineicons */}
                    </button>
                </div>
            </div>
        </div>
    );
}

ErrorPageContent.propTypes = propTypes;

export default ErrorPageContent;