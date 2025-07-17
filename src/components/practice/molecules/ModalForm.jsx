import React from 'react'
import ModalWrap from '../atoms/Modal/ModalWrap'
import ModalHeader from '../atoms/Modal/ModalHeader'
import ModalBody from '../atoms/Modal/ModalBody'
import ModalFooter from '../atoms/Modal/ModalFooter'

function ModalForm({modalHeader, modalBody, modalFooter, handleCancel}) {
  return (
    <ModalWrap handleCancel={handleCancel}>
        <ModalHeader>
            {modalHeader}
        </ModalHeader>
        <ModalBody>
            {modalBody}
        </ModalBody>
        <ModalFooter>
            {modalFooter}
        </ModalFooter>
    </ModalWrap>
  )
}

export default ModalForm