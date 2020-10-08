import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
    sentence: PropTypes.string.isRequired
}

const PhoneWallHeader = ({ title, sentence }) => {
    return (
        <div className="col s12 m10 offset-m1 valign-wrapper">
            <div className="valign">
                <h1>{title}</h1>
                <span className="tagline">
                    {sentence}
                </span>
                <button className="read-more">
                    <i className="icon-caret-down" />
                </button>
            </div>
        </div>
    )
}

PhoneWallHeader.propTypes = propTypes;

export default PhoneWallHeader
