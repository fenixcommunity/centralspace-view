import React from 'react'

const propTypes = {
    XXX: PropTypes.string.isRequired,
    XXX: PropTypes.bool.isRequired,
    XXX: PropTypes.node.isRequired,
    XXX: PropTypes.func.isRequired,
    cardAction: PropTypes.arrayOf(
        PropTypes.shape({
            XXX: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const Slider = ({ }) => {
    return (
        <li>
            <img src={props.background}  alt="description"/>
            <div className={`caption ${props.align}-align`}>
                <h3>{props.title}</h3>
                <h5 className="light grey-text text-lighten-3">{props.sentence}</h5>
                {props.hasIconArrowDown && (
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
