import React from 'react';
import { getImageFromResources } from '../../utils/ImageLazyFinder';

function BlogSectionItem(props) {
    const paragraphs = props.paragraphs ? props.paragraphs.map(paragraph => {
        if (typeof (paragraph) === 'string') {
            return (
                <p>{paragraph}</p>
            )
        }
        if (typeof (paragraph) === 'object' && paragraph.image) {
            const image = paragraph.image;
            const img = getImageFromResources('blog', image.name);
            return (
                <img
                    className="materialboxed"
                    src={img}
                    data-caption={image.dataCaption}
                    alt=""
                />
            )
        }
    }) : "";

    return (
        <>
            {props.hasZoom && (
                <a id="flow-toggle" className="teal-text text-lighten-2"><i className="material-icons medium right">zoom_in</i></a>
            )}
            <h4>
                {props.sectionHeader}
            </h4>
            {paragraphs}
        </>
    )
}

export default BlogSectionItem
