import React from 'react';

function GalleryContainer(props) {
    return (
        <div id="portfolio">
            <div className="container">
                <div className="gallery row">
                    {props.items}
                </div>
            </div>
        </div>
    )
}

export default GalleryContainer
