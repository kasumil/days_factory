import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';
import Button from '../Button';

function Modal({children, handleCancel}) {
    const modalRef = useRef(null);

    const handleBackdropClick = (e) => {
        if(e.target === modalRef.current) {
            handleCancel();
        }
    }

    useEffect(() => {
        if(modalRef.current) {
            modalRef.current.focus();
        }
    }, []);

    const modal = createPortal(
        <div
            className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center duration-300"
            ref={modalRef}
            onClick={handleBackdropClick}
            aria-modal="true"
            role="dialog"
            tabIndex={-1}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <div className="modal-content bg-white p-4 rounded-lg max-w-sm shadow-lg scale-100" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );

    return (
        <div>
            {modal}
        </div>
    )
}

export default Modal