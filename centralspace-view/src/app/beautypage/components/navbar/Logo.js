import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    textStyle: PropTypes.string
}

const Logo = ({ textStyle }) => {
    return (
        <>
            {textStyle && (
                <a href="/beautypage" className="brand-logo">
                    <i className={`icon-diamond ${textStyle}`} />
                </a>
            )}
        </>
    )
}

Logo.propTypes = propTypes;

export default Logo;
