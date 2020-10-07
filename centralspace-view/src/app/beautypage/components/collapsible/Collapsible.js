import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';

function Collapsible(props) {
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

    }, []);
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

export default Collapsible;
