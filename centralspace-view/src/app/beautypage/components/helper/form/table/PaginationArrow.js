import React from 'react'

function PaginationArrow(props) {
    const arrow = props.arrow;
    return (
        <li className={`${arrow.disabled ? "disabled" : ""}`}>
            <a href={arrow.ref}><i className="material-icons">{arrow.icon}</i></a>
        </li>
    )
}

export default PaginationArrow
