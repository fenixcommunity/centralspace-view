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

const PhoneWallHeader = ({}) => {
    return (
        <div className="col s12 m10 offset-m1 valign-wrapper">
            <div className="valign">
                <h1>{props.title}</h1>
                <span className="tagline">
                    {props.sentence}
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
