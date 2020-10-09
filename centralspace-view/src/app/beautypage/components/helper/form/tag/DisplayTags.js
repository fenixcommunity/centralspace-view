import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../../resources/beautypage/css/chips.css';

const propTypes = {
    isDuplicated: PropTypes.bool,
    tags: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            image: PropTypes.node,
            close: PropTypes.bool
        })
    ).isRequired,
}

const DisplayTags = ({ tags, isDuplicated }) => {
    const duplicatedClass = isDuplicated ? "s6" : "s12"

    return (
        <div className={`basic-top-break col ${duplicatedClass}`}>
            {tags && tags.map(tag => (
                <div key={tag.id} id={tag.id} className="chip">
                    {tag.image && (<img src={tag.image} alt="tag" />)}
                    {tag.label}
                    {tag.close && (<i className="close material-icons">close</i>)}
                </div>
            )
            )}
        </div>
    )
}

DisplayTags.propTypes = propTypes;

export default DisplayTags;