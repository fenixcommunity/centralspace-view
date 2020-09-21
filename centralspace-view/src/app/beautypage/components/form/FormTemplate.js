import React from 'react'

function FormTemplate(props) {
    return (
        <div className="container">
            <form>
                <div className="row">
                    <div className="col s12">
                        <h2 className="section-title">{props.header}</h2>
                        {props.formContent}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormTemplate;
