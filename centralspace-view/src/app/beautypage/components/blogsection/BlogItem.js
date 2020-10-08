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

const BlogItem = ({ }) => {
    return (
        <div className="col s12 m6 l4">
            <div className={`card ${props.hasAnimationClass}`} data-duration={props.animationDataDuration}>
                <div className="card-image">
                    <a href={props.blogRef}>
                        <img src={props.blogImg} alt="description" />
                    </a>
                    <span className="card-title">{props.blogTitle}</span>
                </div>
            </div>
        </div>
    )
}

BlogItem.propTypes = propTypes;

export default BlogItem;
