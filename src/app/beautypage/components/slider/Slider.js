import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    align: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sentence: PropTypes.string,
    hasIconArrowDown: PropTypes.bool,
    background: PropTypes.node.isRequired
}

const Slider = ({ align, title, sentence, hasIconArrowDown, background }) => {
    return (
        <li>
            <img src={background} alt="description" />
            <div className={`caption ${align}-align`}>
                <h3>{title}</h3>
                <h5 className="light grey-text text-lighten-3">{sentence}</h5>
                {hasIconArrowDown && (
                    <button className="read-more">
                        <i className="icon-caret-down" />
                    </button>
                )}
            </div>
        </li>
    )
}

Slider.propTypes = propTypes;

export default Slider;
