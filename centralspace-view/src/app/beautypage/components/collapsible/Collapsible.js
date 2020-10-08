import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.js';

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

const Collapsible = ({}) => {
    const pulledOut = props.pulledOut;

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
            {props.items && props.items.map(item => (
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
