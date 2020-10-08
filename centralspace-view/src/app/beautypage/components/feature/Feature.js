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

const Feature = ({ }) => {
    return (
        <>
            <div className={`col s12 m6 l4 ${props.animationClass}`}>
                <h4>
                    <i className={props.featureIcon} />
                </h4>
                <p className="caption">
                    {props.featureMessage}
                </p>
            </div>
        </>
    )
}

Feature.propTypes = propTypes;

export default Feature;
