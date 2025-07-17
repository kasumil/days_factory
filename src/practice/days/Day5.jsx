import React, { useEffect, useRef, useState } from 'react'
import Button from '../../components/practice/atoms/Button';
import { useAlert } from '../../hooks/useAlert';
import ModalOrganisms from '../../components/practice/orgnaisms/ModalOrganisms';

function Day5() {
  const modalContent = {
    title: "확인 필요",
    description: "정말로 이 작업을 진행하시겠습니까?",
    confirmLabel: "확인",
    cancelLabel: "취소"
  }

  const {isOpen, handleShowAlert, handleCloseAlert} = useAlert();
  const modalRef = useRef(null);

  // esc 키 클릭시 모달 꺼짐
  useEffect(() => {
    const handleKeyDown = (e) => {
      if(e.key === 'Escape') {
        handleCloseAlert();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      }
    }
  }, [isOpen]);

  

  return (
    <div>
      <Button onClick={handleShowAlert}>모달 열기</Button>
      {isOpen && <ModalOrganisms ref={modalRef} modalContent={modalContent} handleConfirm={handleShowAlert} handleCancel={handleCloseAlert} />}
    </div>
  )
}

export default Day5