import React from 'react'

function BlogItem(props) {
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

export default BlogItem;
