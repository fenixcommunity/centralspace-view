import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';

function Modal(props) {
    const modalRef = useRef(null);
    useEffect(() => {
        const modal = M.Modal.init(modalRef.current, {});
    }, []);

    return (
        <div className="container">
            <a className="waves-effect waves-light btn teal lighten-2 modal-trigger" href="#terms">Terms & Conditions</a>

            {/* modal-fixed-footer */}
            <div id="terms" className="modal" ref={modalRef} >
                <div className="modal-content">
                    <h4>{props.title}</h4>
                    <p>{props.content}</p>
                </div>
                <div className="modal-footer hoverable">
                    <a href={props.agreeAction.ref} className="modal-close btn teal lighten-2">{props.agreeAction.title}</a>
                </div>
            </div>
        </div>
    )
}

export default Modal;
