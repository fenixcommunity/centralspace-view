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

const Logo = ({}) => {
    return (
        <>
            {props.textStyle && (
                <a href="/beautypage" className="brand-logo">
                    <i className={`icon-diamond ${props.textStyle}`} />
                </a>
            )}
        </>
    )
}

Logo.propTypes = propTypes;

export default Logo;
