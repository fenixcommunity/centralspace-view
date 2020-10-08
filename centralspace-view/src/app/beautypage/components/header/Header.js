import React from "react";
import PropTypes from 'prop-types';

const propTypes = {
    headerMessage: PropTypes.string.isRequired,
    headerSentence: PropTypes.string.isRequired,
    hasBlackTheme: PropTypes.bool,
    headerWithOffset: PropTypes.bool,
    headerImg: PropTypes.node.isRequired
}

const Header = ({ headerMessage, headerSentence, hasBlackTheme, headerImg }) => {
    const blackTheme = hasBlackTheme;
    const headerWithOffsetClass = headerWithOffset ? "col s12 m6 offset-m3 valign" : "col s12"

    return (
        <div className={`section header ${blackTheme ? "white" : ""}`}>
            <img className="background" src={headerImg} alt="description" />
            <div className="header-wrapper row valign-wrapper">
                <div className={headerWithOffsetClass}>
                    <h1>{headerMessage}</h1>
                    <span className="tagline">
                        {headerSentence}
                    </span>
                    <button className="read-more">
                        <i className={`${blackTheme ? "black-text" : ""} icon-caret-down`} />
                    </button>
                </div>
            </div>
        </div>
    );
}

Header.propTypes = propTypes;

export default Header;
