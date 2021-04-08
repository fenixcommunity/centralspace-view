import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
    textStyle: PropTypes.string
}

const Logo = ({ textStyle }) => {
    return (
        <>
            {textStyle && (
                <NavLink className="brand-logo" to="/">
                    <i className={`icon-diamond ${textStyle}`} />
                </NavLink>
            )}
        </>
    )
}

Logo.propTypes = propTypes;

export default withRouter(Logo);
