import React from 'react';

const Heading = ({ 
  children, 
  level = 1, 
  size = 'lg',
  className = '',
  ...props 
}) => {
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl'
  };

  const baseClasses = 'font-bold text-gray-900';
  const classes = `${baseClasses} ${sizes[size]} ${className}`;

  const Tag = `h${level}`;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default Heading; 