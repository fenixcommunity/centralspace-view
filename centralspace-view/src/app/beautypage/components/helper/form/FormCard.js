import React from 'react';

function FormCard(props) {
    const theme = props.theme ? props.theme : "white"
    const themeColor = props.themeColor ? props.themeColor : "blue"

    return (
        <div className="row">
            <div className="col l6 m10 s12 offset-l3 offset-m1">
                {props.header && (<h3 className={`center-align ${theme} ${themeColor}-text`}>{props.header}</h3>)}
                <div className="card">
                    <div className="card-content">
                        <form onSubmit={props.onSubmit}>
                            {props.content}
                        </form>
                    </div>
                </div>
                {props.footerActions && props.footerActions.map(action => (
                    action
                ))}
            </div>
        </div>
    )
}

export default FormCard;