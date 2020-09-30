import React from 'react'

function BasicSection(props) {
    //todo create wrapper component
    const largeSection = props.large ? "section-large-size" : "";

    return (
        <div className={`section valign-wrapper ${props.theme} ${largeSection}`}>
            <div className="container">
                {props.wrappedSection}
            </div>
        </div >
    )
}

export default BasicSection
