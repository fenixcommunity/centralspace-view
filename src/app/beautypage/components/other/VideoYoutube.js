import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}

const VideoYoutube = ({ width, height, src }) => {
    return (
        <div className="video-container">
            <iframe title="video_youtube" width={width} height={height} src={src} frameBorder="0" allowFullScreen></iframe>
        </div>
    )
}

VideoYoutube.propTypes = propTypes;

export default VideoYoutube
