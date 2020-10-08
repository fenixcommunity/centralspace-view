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

const DividedSection = ({}) => {
    const contentLeft = props.contentLeft;
    const contentRight = props.contentRight;
    return (
        <section className="container scrollspy" id="services">
            <div className="row">
                <div className={`col s12 ${contentLeft.division} offset-${contentLeft.offset}`}>
                    {contentLeft.content}
                </div>
                <div className={`col s12 ${contentRight.division} offset-${contentRight.offset}`}>
                    {contentRight.content}
                </div>
            </div>
        </section>
    )
}

DividedSection.propTypes = propTypes;

export default DividedSection;
