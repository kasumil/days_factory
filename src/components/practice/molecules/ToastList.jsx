// components/practice/molecules/ToastList.jsx
import React from 'react';
import Toast from '../atoms/Toast';

function ToastList({ toasts }) {
  return (
    <div className="fixed top-4 right-4 space-y-2 z-50">
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} variant={toast.variant} />
      ))}
    </div>
  );
}

export default ToastList;
