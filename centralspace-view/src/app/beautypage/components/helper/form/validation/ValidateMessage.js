import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../../resources/beautypage/css/helper-text-validator.css';

const propTypes = {
    validate: PropTypes.shape({
        errorMessage: PropTypes.string,
        successMessage: PropTypes.string
    }),
    error: PropTypes.object
}

const ValidateMessage = ({ validate, error }) => {
    const successMessage = validate ? validate.successMessage : null;
    const errorMessage = error ? error.message : (validate ? validate.errorMessage : null);
    return (
        <>
            {successMessage && (
                <span className="helper-text" data-success={validate.successMessage} />
            )}
            {errorMessage && (
                <span className="helper-text" data-error={errorMessage} />
            )}
        </>
    )
}

ValidateMessage.propTypes = propTypes;

export default ValidateMessage;
