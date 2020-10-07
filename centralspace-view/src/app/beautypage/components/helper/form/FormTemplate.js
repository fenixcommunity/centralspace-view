import React from 'react'

function FormTemplate(props) {
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

export default FormTemplate;
