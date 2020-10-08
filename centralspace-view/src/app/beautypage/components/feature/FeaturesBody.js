import React from "react";
import Feature from "./Feature";

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

const FeaturesBody = ({}) => {
    const hasAnimation = props.hasAnimation;
    const animationClass = hasAnimation ? 'fade-in-out' : '';

    const basicBody = (
        <>
            <Feature
                animationClass={animationClass}
                featureIcon="icon-light-bulb"
                featureMessage="This is a cool feature about your product! It really separates
            you from the crowd." />
            <Feature
                animationClass={animationClass}
                featureIcon="icon-bolt"
                featureMessage="This is a cool feature about your product! It really separates
            you from the crowd." />
            <Feature
                animationClass={animationClass}
                featureIcon="icon-rocket"
                featureMessage="This is a cool feature about your product! It really separates
            you from the crowd." />
            <Feature
                animationClass={animationClass}
                featureIcon="icon-settings"
                featureMessage="This is a cool feature about your product! It really separates
            you from the crowd." />
            <Feature
                animationClass={animationClass}
                featureIcon="icon-umbrella"
                featureMessage="This is a cool feature about your product! It really separates
            you from the crowd." />
            <Feature
                animationClass={animationClass}
                featureIcon="icon-compass"
                featureMessage="This is a cool feature about your product! It really separates
            you from the crowd." />
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

FeaturesBody.propTypes = propTypes;

export default FeaturesBody;
