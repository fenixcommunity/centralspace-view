import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../../resources/beautypage/css/helper-text-validator.css';

const propTypes = {
    XXX: PropTypes.string.isRequired,
    XXX: PropTypes.bool.isRequired,
    XXX: PropTypes.node.isRequired,
    XXX: PropTypes.func.isRequired,
    cardAction: PropTypes.arrayOf(
        PropTypes.shape({
            XXX: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const ValidateMessage = ({}) => {
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

ValidateMessage.propTypes = propTypes;

export default ValidateMessage;
