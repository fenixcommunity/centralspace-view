import React from 'react'

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

const FormTemplate = ({}) => {
    return (
        <form id={props.formId}>
            <div className="row">
                {props.headerText &&
                    (
                        <div className="col s12">
                            <h2 className="section-title">{props.headerText}</h2>
                        </div>
                    )
                }
                <div className="col s12">
                    {props.formContent}
                </div>
            </div>
        </form>
    )
}

FormTemplate.propTypes = propTypes;

export default FormTemplate;
