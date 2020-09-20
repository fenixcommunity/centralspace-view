import React from 'react'

function BasicSection(props) {
    //todo create wrapper component
    return (
        <div className="section valign-wrapper">
        <div className="container">
            {props.wrappedSection}
        </div>
    </div >
    )
}

export default BasicSection
