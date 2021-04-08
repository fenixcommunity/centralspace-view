import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    theme: PropTypes.string,
    large: PropTypes.bool,
    wrappedSection: PropTypes.node.isRequired
}

const BasicSection = ({ theme, large, wrappedSection }) => {
    //todo create wrapper component
    const largeSection = large ? "section-large-size" : "";

    return (
        <div className={`section valign-wrapper ${theme} ${largeSection}`}>
            <div className="container">
                {wrappedSection}
            </div>
        </div >
    )
}

BasicSection.propTypes = propTypes;

export default BasicSection
