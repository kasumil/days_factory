import React from 'react';

const Input = ({ 
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  required = false,
  disabled = false,
  error = false,
  autoComplete,
  className = '',
  ...props 
}) => {
  const baseClasses = 'appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:z-10 sm:text-sm transition-colors duration-200';
  
  const stateClasses = error 
    ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500';
  
  const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : '';
  
  const classes = `${baseClasses} ${stateClasses} ${disabledClasses} ${className}`;

  return (
    <div>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        className={classes}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input; 