import React from 'react'

function FullHeightSection(props) {
    return (
        <div className={`section full-height ${props.theme}`}>
            <div className="container">
                {props.wrappedSection}
            </div>
        </div>
    )
}

export default FullHeightSection;
