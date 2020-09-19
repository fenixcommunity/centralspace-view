import React from 'react'

function Client(props) {
    return (
        <>
            <a href="#!" className={`col s12 m6 l4 client ${props.color} `}>
                <img
                    className="logo"
                    src={props.clientLogo}
                    alt={props.clientName}
                />
                <span className="title">{props.clientName}</span>
            </a>
        </>
    )
}

export default Client;
