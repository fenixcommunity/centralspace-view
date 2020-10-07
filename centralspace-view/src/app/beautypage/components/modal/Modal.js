import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';

function Modal(props) {
    const modalRef = useRef(null);
    const modalBottom = props.modalBottom;

    useEffect(() => {
        const modal = M.Modal.init(modalRef.current, {});
    }, []);

    return (
         

<div id="modal" className={`modal ${modalBottom ? "bottom-sheet" : ""}`} ref={modalRef} >
<div className="modal-content">
    {props.title && (
        <h3 className="header">{props.title}</h3>
    )}
    {props.content}
</div>
<div className={`modal-footer ${modalBottom ? "hoverable" : ""}`}>
      {props.modalActions && props.modalActions.map(button => (
            button
        ))}
</div>
</div>
    )
}

export default Modal;
