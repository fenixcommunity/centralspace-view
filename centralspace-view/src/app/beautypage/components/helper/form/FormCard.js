import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    theme: PropTypes.string,
    themeColor: PropTypes.string,
    header: PropTypes.string,
    content: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
    footerActions: PropTypes.array
}

const FormCard = ({ theme, themeColor, header, content, onSubmit, footerActions }) => {
    const themeClass = theme ? theme : "white"
    const themeColorClass = themeColor ? themeColor : "blue"

    return (
        <div className="row">
            <div className="col l6 m10 s12 offset-l3 offset-m1">
                {header && (<h3 className={`center-align ${themeClass} ${themeColorClass}-text`}>{header}</h3>)}
                <div className="card">
                    <div className="card-content">
                        <form onSubmit={onSubmit}>
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
