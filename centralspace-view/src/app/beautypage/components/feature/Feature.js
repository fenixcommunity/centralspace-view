import React from 'react'

function Feature(props) {
    return (
        <>
            <div className={`col s12 m6 l4 ${props.animationClass}`}>
                <h4>
                    <i className={props.featureIcon} />
                </h4>
                <p className="caption">
                    {props.featureMessage}
                </p>
            </div>
        </>
    )
}

export default Feature;
