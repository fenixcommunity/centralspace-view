import React from 'react'

function FormTemplate(props) {
    return (
        <div className="valign-wrapper">
            <div className="container">
                <form id={props.formId}>
                    <div className="row">
                        <div className="col s12">
                            <h2 className="section-title">{props.headerText}</h2>
                        </div>
                        <div className="col s12">
                            {props.formContent}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormTemplate;
