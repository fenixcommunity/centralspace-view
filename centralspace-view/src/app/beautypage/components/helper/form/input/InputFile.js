import React from 'react'

const propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    isDuplicated: PropTypes.bool,
    multiple: PropTypes.bool
}

const FileInput = ({ label, placeholder, isDuplicated, multiple }) => {
    const multipleAttr = multiple ? { "multiple": true } : {}
    const placeholderAttr = placeholder ? { "placeholder": placeholder } : {}
    const duplicatedClass = isDuplicated ? "s6" : "s12"

    return (
        <div className={`input-field file-field col ${duplicatedClass}`}>
            <div className="btn">
                <span>{label}</span>
                <input type="file" {...multipleAttr} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" {...placeholderAttr} />
            </div>
        </div>
    )
}

FileInput.propTypes = propTypes;

export default FileInput
