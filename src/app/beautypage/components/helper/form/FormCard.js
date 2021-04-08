import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    reference: PropTypes.oneOfType([ PropTypes.object, PropTypes.function ]),
    theme: PropTypes.string,
    themeColor: PropTypes.string,
    header: PropTypes.string,
    content: PropTypes.node.isRequired,
    footerActions: PropTypes.array,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
}

const FormCard = ({ theme, themeColor, header, content, footerActions, onSubmit, onChange, onBlur, reference }) => {
    const themeClass = theme ? theme : "white"
    const themeColorClass = themeColor ? themeColor : "blue"

    return (
        <div className="row">
            <div className="col l6 m10 s12 offset-l3 offset-m1">
                {header && (<h3 className={`center-align ${themeClass} ${themeColorClass}`}>{header}</h3>)}
                <div className="card">
                    <div className="card-content">
                        <form ref={reference} onSubmit={onSubmit} onChange={onChange} onBlur={onBlur}>
                            {content}
                        </form>
                    </div>
                </div>
                {footerActions && footerActions.map(action => (
                    action
                ))}
            </div>
        </div>
    )
}

FormCard.propTypes = propTypes;

export default FormCard;
