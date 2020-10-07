import React from 'react';

function Icon(props) {
    return (
        <i className={`material-icons prefix 
        ${props.iconColor ? props.iconColor : ""}
        ${props.possition ? props.possition : "right"}`}
        >
            {props.icon}
        </i>

    )
}

export default Icon;
