import React from 'react';

function GalleryItem(props) {
    //todo required
    const image = props.image;
    return (
        <div className={`col l4 m6 s12 gallery-item gallery-expand gallery-filter ${props.filterName}`}>
            <div className="gallery-curve-wrapper">
                <a
                    className="gallery-cover"
                    style={{
                        height: image.height
                    }}
                >
                    <img src={image.img} alt={image.name} />
                </a>
                <div className="gallery-header">
                    {props.headerContent}
                </div>
                <div className="gallery-body">
                    <div className="title-wrapper">
                        <h3>{props.contentTitle}</h3>
                    </div>
                    <p className="description">
                        {props.content}
                    </p>
                </div>
                <div className="gallery-action">
                    {props.actions && props.actions.map(action => (
                        action
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GalleryItem;
