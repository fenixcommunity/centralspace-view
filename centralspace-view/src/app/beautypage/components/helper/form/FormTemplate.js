import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    formId: PropTypes.string.isRequired,
    headerText: PropTypes.string,
    formContent: PropTypes.node.isRequired
}

const FormTemplate = ({ formId, headerText, formContent }) => {
    return (
        <form id={formId}>
            <div className="row">
                {headerText &&
                    (
                        <div className="col s12">
                            <h2 className="section-title">{headerText}</h2>
                        </div>
                    )
                }
                <div className="col s12">
                    {formContent}
                </div>
            </div>
        </form>
    )
}

FormTemplate.propTypes = propTypes;

export default FormTemplate;
