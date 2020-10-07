import React from 'react';
import '../../../../../../resources/beautypage/css/helper-text-validator.css';

function ValidateMessage(props) {
    //set validate as required
    const validate = props.validate;
    return (
        <>
            {validate.successMessage && (
                <span className="helper-text" data-success={validate.successMessage} />
            )}
            {validate.errorMessage && (
                <span className="helper-text" data-error={validate.errorMessage} />
            )}
        </>
    )
}

export default ValidateMessage;
