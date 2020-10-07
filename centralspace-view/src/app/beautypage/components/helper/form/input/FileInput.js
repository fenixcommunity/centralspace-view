import React from 'react'

function FileInput(props) {
    const multipleAttr = props.multiple ? { "multiple": true } : {}
    const placeholderAttr = props.placeholder ? { "placeholder": props.placeholder } : {}
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"

    return (
        <div className={`input-field file-field col ${duplicatedClass}`}>
            <div className="btn">
                <span>{props.label}</span>
                <input type="file" {...multipleAttr} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" {...placeholderAttr} />
            </div>
        </div>
    )
}

export default FileInput
