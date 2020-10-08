import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../../resources/beautypage/css/chips.css';

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

const DisplayTags = ({ }) => {
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const tags = props.tags;

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