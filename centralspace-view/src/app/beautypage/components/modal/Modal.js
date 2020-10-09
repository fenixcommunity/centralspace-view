import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.js';

const propTypes = {
    title: PropTypes.string.isRequired,
    modalBottom: PropTypes.bool,
    content: PropTypes.node.isRequired,
    modalActions: PropTypes.array
}

const Modal = ({ title, modalBottom, content, modalActions }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        M.Modal.init(modalRef.current, {});
    }, []);

    return (
        <div id="modal" className={`modal ${modalBottom ? "bottom-sheet" : ""}`} ref={modalRef} >
            <div className="modal-content">
                {title && (
                    <h3 className="header">{title}</h3>
                )}
                {content}
            </div>
            <div className={`modal-footer ${modalBottom ? "hoverable" : ""}`}>
                {modalActions && modalActions.map(button => (
                    button
                ))}
            </div>
        </div>
    )
}

Modal.propTypes = propTypes;

export default Modal;
