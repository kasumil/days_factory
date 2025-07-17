import React from 'react'

/**
 * 
 * @param {string} id 필수 
 * @param {string} name 필수
 * @param {string} label 필수
 * @param {string} placeholder 필수
 * @param {boolean} error 필수
 * @param {*} props 선택
 * @returns 
 */
function TextField({id,name, label, placeholder, error, errorMessage, ...props}) {
  const focusClasses = 'focus:border-blue-400 focus:ring-blue-400';
  const baseClasses = 'w-full p-2 border border-gray-300 rounded-md';
  const errorClasses = 'border-red-400 focus:border-red-400 focus:ring-red-400';
  const inputClasses = `${baseClasses} ${error ? errorClasses : focusClasses}`;

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
        <label htmlFor={id}>{label}</label>
        <input id={id} placeholder={placeholder} className={inputClasses} 
          name={name}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props} 
        />
        {error && <p id={`${id}-error`}  className='text-red-400 text-sm'>{errorMessage ? errorMessage : `${label}은 필수입니다.`}</p>}
    </div>
  )
}

export default TextField