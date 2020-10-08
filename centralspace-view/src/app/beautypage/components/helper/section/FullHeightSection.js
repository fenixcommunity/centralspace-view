import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    theme: PropTypes.string,
    wrappedSection: PropTypes.node.isRequired
}

const FullHeightSection = ({ theme, wrappedSection }) => {
    return (
        <div className={`section full-height ${theme}`}>
            <div className="container">
                {wrappedSection}
            </div>
        </div>
    )
}

FullHeightSection.propTypes = propTypes;

export default FullHeightSection;
