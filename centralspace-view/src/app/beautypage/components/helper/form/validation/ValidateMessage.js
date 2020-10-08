import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../../resources/beautypage/css/helper-text-validator.css';

const propTypes = {
    validate: PropTypes.object.isRequired
}

const ValidateMessage = ({ validate }) => {
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

ValidateMessage.propTypes = propTypes;

export default ValidateMessage;
