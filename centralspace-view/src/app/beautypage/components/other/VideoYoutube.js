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

const VideoYoutube = ({}) => {
    return (
        <div className="video-container">
            <iframe title="video_youtube" width={props.width} height={props.height} src={props.src} frameBorder="0" allowFullScreen></iframe>
        </div>
    )
}

VideoYoutube.propTypes = propTypes;

export default VideoYoutube
