import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    contentLeft: PropTypes.objectOf(
        PropTypes.shape({
            division: PropTypes.string,
            offset: PropTypes.string
        })
    ).isRequired,
    contentRight: PropTypes.objectOf(
        PropTypes.shape({
            division: PropTypes.string,
            offset: PropTypes.string
        })
    ).isRequired
}

const DividedSection = ({ contentLeft, contentRight }) => {
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
