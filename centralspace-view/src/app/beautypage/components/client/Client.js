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

const Client = ({}) => {
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

Client.propTypes = propTypes;

export default Client;
