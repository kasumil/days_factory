import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ 
  to, 
  children, 
  variant = 'secondary',
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';
  
  const variants = {
    primary: 'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-indigo-500',
    danger: 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500',
    text: 'text-indigo-600 hover:text-indigo-700 focus:ring-indigo-500'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <Link
      to={to}
      className={classes}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkButton; 