import React from "react";
import poly1 from '../../../../resources/beautypage/images/poly1.jpg';
import poly2 from '../../../../resources/beautypage/images/poly2.jpg';
import poly3 from '../../../../resources/beautypage/images/poly3.jpg';
import poly4 from '../../../../resources/beautypage/images/poly4.jpg';
import poly5 from '../../../../resources/beautypage/images/poly5.jpg';
import poly6 from '../../../../resources/beautypage/images/poly6.jpg';

function BlogBody(props) {
    const hasAnimation = props.hasAnimation;
    const hasAnimationClass = hasAnimation ? 'fade-in-out up-in-out' : '';
    const animationDataDuration = hasAnimation ? 0 : 'none';
    // we can also add custom attribute to html node custom-data=xxx
    return (
        <>
            <div className="col s12 center">
                <h1>blog</h1>
                <div className="row masonry-grid">
                    <div className="col s12 m6 l4">
                        <div className={`card ${hasAnimationClass}`} data-duration={animationDataDuration}>
                            <div className="card-image">
                                <a href="blog.html">
                                    <img src={poly1} alt="img" />
                                </a>
                                <span className="card-title">Something Interesting</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className={`card ${hasAnimationClass}`} data-duration={animationDataDuration}>
                            <div className="card-image">
                                <a href="blog.html">
                                    <img src={poly2} alt="img" />
                                </a>
                                <span className="card-title">Another Blog Post</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className={`card ${hasAnimationClass}`} data-duration={animationDataDuration}>
                            <div className="card-image">
                                <a href="blog.html">
                                    <img src={poly3} alt="img" />
                                </a>
                                <span className="card-title">Click Bait Article</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className={`card ${hasAnimationClass}`} data-duration={animationDataDuration}>
                            <div className="card-image">
                                <a href="blog.html">
                                    <img src={poly4} alt="img" />
                                </a>
                                <span className="card-title">Don't Read This!</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className={`card ${hasAnimationClass}`} data-duration={animationDataDuration}>
                            <div className="card-image">
                                <a href="blog.html">
                                    <img src={poly5} alt="img" />
                                </a>
                                <span className="card-title">
                                    Why Are You Still Reading?
                      </span>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className={`card ${hasAnimationClass}`} data-duration={animationDataDuration}>
                            <div className="card-image">
                                <a href="blog.html">
                                    <img src={poly6} alt="img" />
                                </a>
                                <span className="card-title">Good Bye</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogBody;
