import React from "react";
import PropTypes from 'prop-types';
import Feature from "./Feature";

const propTypes = {
    hasAnimation: PropTypes.bool
}

const FeaturesBody = ({ hasAnimation }) => {
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
