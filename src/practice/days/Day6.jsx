// pages/practice/Day6.jsx
import React from 'react';
import {useToast} from '../../hooks/useToast';
import Button from '../../components/practice/atoms/Button';

function Day6() {
  const { showToast } = useToast();

  return (
    <div className='p-4 flex flex-col gap-2 items-center justify-center'>
      <Button onClick={() => showToast('저장되었습니다 ✅', 'success')}>성공</Button>
      <Button variant="danger" onClick={() => showToast('오류가 발생했습니다 ❌', 'error')}>에러</Button>
      <Button variant="warning" onClick={() => showToast('주의가 필요합니다 ⚠️', 'warning')}>경고</Button>
      <Button variant="info" onClick={() => showToast('안내 메시지입니다 ℹ️', 'info')}>정보</Button>
    </div>
  );
}

export default Day6;
