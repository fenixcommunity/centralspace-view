import React from 'react';
import PropTypes from 'prop-types';
import { getImageFromResources } from '../../utils/imageLazyFinder';

const propTypes = {
    paragraphs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            content: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.object
            ]).isRequired
        })
    ).isRequired,
    hasZoom: PropTypes.bool.isRequired,
    sectionHeader: PropTypes.string.isRequired
}

const BlogSectionItem = ({ paragraphs, hasZoom, sectionHeader }) => {
    const paragraphsToRender = paragraphs ? paragraphs.map(paragraph => {
        if (typeof (paragraph.content) === 'string') {
            return (
                <p key={paragraph.id}>{paragraph.content}</p>
            )
        }
        if (typeof (paragraph) === 'object' && paragraph.content.image) {
            const image = paragraph.content.image;
            const img = getImageFromResources('blog', image.name);
            return (
                <img key={paragraph.id}
                    className="materialboxed"
                    src={img}
                    data-caption={image.dataCaption}
                    alt=""
                />
            )
        }
        return "";
    }) : "";

    return (
        <>
            {hasZoom && (
                <a id="flow-toggle" className="teal-text text-lighten-2"><i className="material-icons medium right">zoom_in</i></a>
            )}
            <h4>
                {sectionHeader}
            </h4>
            {paragraphsToRender}
        </>
    )
}

BlogSectionItem.propTypes = propTypes;

export default BlogSectionItem
