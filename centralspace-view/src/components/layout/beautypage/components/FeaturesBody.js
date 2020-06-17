import React from "react";

function FeaturesBody(props) {
    const hasAnimation = props.hasAnimation;
    const hasAnimationClass = hasAnimation ? 'fade-in-out' : '';

    const basicBody = (
        <>
            <div className={`col s12 m6 l4 ${hasAnimationClass}`}>
                <h4>
                    <i className="icon-light-bulb" />
                </h4>
                <p className="caption">
                    This is a cool feature about your product! It really separates
                    you from the crowd.
                </p>
            </div>
            <div className={`col s12 m6 l4 ${hasAnimationClass}`}>
                <h4>
                    <i className="icon-bolt" />
                </h4>
                <p className="caption">
                    This is a cool feature about your product! It really separates
                    you from the crowd.
                </p>
            </div>
            <div className={`col s12 m6 l4 ${hasAnimationClass}`}>
                <h4>
                    <i className="icon-rocket" />
                </h4>
                <p className="caption">
                    This is a cool feature about your product! It really separates
                    you from the crowd.
                </p>
            </div>
            <div className={`col s12 m6 l4 ${hasAnimationClass}`}>
                <h4>
                    <i className="icon-settings" />
                </h4>
                <p className="caption">
                    This is a cool feature about your product! It really separates
                    you from the crowd.
                </p>
            </div>
            <div className={`col s12 m6 l4 ${hasAnimationClass}`}>
                <h4>
                    <i className="icon-umbrella" />
                </h4>
                <p className="caption">
                    This is a cool feature about your product! It really separates
                    you from the crowd.
                </p>
            </div>
            <div className={`col s12 m6 l4 ${hasAnimationClass}`}>
                <h4>
                    <i className="icon-compass" />
                </h4>
                <p className="caption">
                    This is a cool feature about your product! It really separates
                    you from the crowd.
                </p>
            </div>
        </>
    )

    return (
        <>
            {hasAnimation ? (
                <div className="row staggered-transition-wrapper"
                    data-duration={0}
                    data-staggereddelay=".9">
                    {basicBody}
                </div>

            ) : basicBody}
        </>
    );
}

export default FeaturesBody;
