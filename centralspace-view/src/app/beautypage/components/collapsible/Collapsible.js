import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.js';

const propTypes = {
    pulledOut: PropTypes.bool,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            headerIcon: PropTypes.string.isRequired,
            headerMessage: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired
        })
    ).isRequired,
}

const Collapsible = ({ items, pulledOut }) => {
    const pulledOut = pulledOut;

    const collapsibleRef = useRef(null);
    const collapsiblePopupRef = useRef(null);

    useEffect(() => {
        if (pulledOut) {
            M.Collapsible.init(collapsiblePopupRef.current, {
                accordion: false
            });
        } else {
            M.Collapsible.init(collapsibleRef.current, {});
        }

    }, [pulledOut]);
    
    return (
        <ul className={`collapsible ${pulledOut ? "popout" : ""}`} ref={collapsibleRef}>
            {items && items.map(item => (
                <li key={item.id}>
                    <div className="collapsible-header"><i className="material-icons">{item.headerIcon}</i>{item.headerMessage}</div>
                    <div className="collapsible-body">{item.content}</div>
                </li>
            ))}
        </ul>

    )
}

Collapsible.propTypes = propTypes;

export default Collapsible;
