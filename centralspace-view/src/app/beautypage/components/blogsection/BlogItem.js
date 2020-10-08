import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    blogRef: PropTypes.string.isRequired,
    blogTitle: PropTypes.string.isRequired,
    hasAnimationClass: PropTypes.bool,
    animationDataDuration: PropTypes.bool,
    blogImg: PropTypes.node.isRequired,
}

const BlogItem = ({ blogRef, blogTitle, hasAnimationClass, animationDataDuration, blogImg }) => {
    return (
        <div className="col s12 m6 l4">
            <div className={`card ${hasAnimationClass}`} data-duration={animationDataDuration}>
                <div className="card-image">
                    <a href={blogRef}>
                        <img src={blogImg} alt="description" />
                    </a>
                    <span className="card-title">{blogTitle}</span>
                </div>
            </div>
        </div>
    )
}

BlogItem.propTypes = propTypes;

export default BlogItem;
