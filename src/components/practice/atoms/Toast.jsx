// components/practice/atoms/Toast.jsx
import React from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';

const variantMap = {
  success: {
    icon: <FaCheckCircle />,
    bg: 'bg-green-500',
  },
  error: {
    icon: <FaTimesCircle />,
    bg: 'bg-red-500',
  },
  warning: {
    icon: <FaExclamationTriangle />,
    bg: 'bg-yellow-500',
  },
  info: {
    icon: <FaInfoCircle />,
    bg: 'bg-blue-500',
  },
};

function Toast({ message, variant = 'info' }) {
  const { icon, bg } = variantMap[variant] || variantMap.info;

  return (
    <div className={`flex items-center gap-2 p-3 text-white rounded shadow-md ${bg} animate-fadeIn`}>
      <span>{icon}</span>
      <span>{message}</span>
    </div>
  );
}

export default Toast;
