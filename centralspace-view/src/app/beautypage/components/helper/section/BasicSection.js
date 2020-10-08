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

const BasicSection = ({ }) => {
    //todo create wrapper component
    const largeSection = props.large ? "section-large-size" : "";

    return (
        <div className={`section valign-wrapper ${props.theme} ${largeSection}`}>
            <div className="container">
                {props.wrappedSection}
            </div>
        </div >
    )
}

BasicSection.propTypes = propTypes;

export default BasicSection
