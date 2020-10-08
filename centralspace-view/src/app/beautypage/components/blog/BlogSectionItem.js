import React from 'react';
import { getImageFromResources } from '../../utils/imageLazyFinder';

function BlogSectionItem(props) {
    const paragraphs = props.paragraphs ? props.paragraphs.map(paragraph => {
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
            {props.hasZoom && (
                <a id="flow-toggle" className="teal-text text-lighten-2" href="#!"><i className="material-icons medium right">zoom_in</i></a>
            )}
            <h4>
                {props.sectionHeader}
            </h4>
            {paragraphs}
        </>
    )
}

export default BlogSectionItem
