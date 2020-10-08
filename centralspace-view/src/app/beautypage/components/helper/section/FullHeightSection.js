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

const FullHeightSection = ({}) => {
    return (
        <div className={`section full-height ${props.theme}`}>
            <div className="container">
                {props.wrappedSection}
            </div>
        </div>
    )
}

FullHeightSection.propTypes = propTypes;

export default FullHeightSection;
