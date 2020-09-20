import React from 'react'

function PhoneWallHeader(props) {
    return (
        <div className="col s12 m10 offset-m1 valign-wrapper">
            <div className="valign">
                <h1>{props.title}</h1>
                <span className="tagline">
                    {props.sentence}
                </span>
                <button className="read-more">
                    <i className="icon-caret-down" />
                </button>
            </div>
        </div>
    )
}

export default PhoneWallHeader
