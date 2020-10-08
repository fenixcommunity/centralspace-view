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

const Modal = ({ }) => {
    const modalRef = useRef(null);
    const modalBottom = props.modalBottom;

    useEffect(() => {
        M.Modal.init(modalRef.current, {});
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

Modal.propTypes = propTypes;

export default Modal;
