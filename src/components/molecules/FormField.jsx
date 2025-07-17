import React from 'react';
import { Input } from '../atoms';

const FormField = ({ 
  label,
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  error = false,
  autoComplete,
  className = '',
  ...props 
}) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id || name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <Input
        id={id || name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        error={error}
        autoComplete={autoComplete}
        {...props}
      />
    </div>
  );
};

export default FormField; 