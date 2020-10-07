import React from 'react'

function VideoYoutube(props) {
    return (
        <div className="video-container">
            <iframe width={props.width} height={props.height} src={props.src} frameBorder="0" allowFullScreen></iframe>
        </div>
    )
}

export default VideoYoutube
