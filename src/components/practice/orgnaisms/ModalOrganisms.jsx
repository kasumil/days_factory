import React from 'react'
import ModalForm from '../molecules/ModalForm'
import Button from '../atoms/Button'

function ModalOrganisms({modalContent, handleConfirm, handleCancel}) {

    const Header = <h2>{modalContent.title}</h2>
    const Body = <p>{modalContent.description}</p>
    const Footer = (
        <div className="modal-buttons w-full flex gap-2 mt-4" aria-label="모달 푸터">
            <Button type="button" aria-label="확인" variant="primary" size='full' onClick={handleConfirm}>{modalContent.confirmLabel}</Button>
            <Button type="button" aria-label="모달 닫기" variant="secondary" size='full' onClick={handleCancel}>{modalContent.cancelLabel}</Button>
        </div>
    );
  return (
    <ModalForm modalHeader={Header} modalBody={Body} modalFooter={Footer} handleCancel={handleCancel} />
  )
}

export default ModalOrganisms