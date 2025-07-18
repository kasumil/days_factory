import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function ModalWrap({ children, handleCancel }) {
  const modalRef = useRef(null);

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      handleCancel();
    }
  };

  // ✅ 포커스트랩 핵심 로직
  useEffect(() => {
    const focusableSelectors =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    const trapFocus = (e) => {
      const focusableEls = modalRef.current?.querySelectorAll(focusableSelectors);
      const firstEl = focusableEls?.[0];
      const lastEl = focusableEls?.[focusableEls.length - 1];

      if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl?.focus();
      } else if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl?.focus();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        trapFocus(e);
      }
    };

    const modalEl = modalRef.current;
    if (modalEl) {
      modalEl.focus();
      modalEl.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      modalEl?.removeEventListener('keydown', handleKeyDown);
    };
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
      <div
        className="modal-content bg-white p-4 rounded-lg max-w-sm shadow-lg scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );

  return <>{modal}</>;
}

export default ModalWrap;
