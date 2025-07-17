import React from 'react'

function Button({ variant = 'primary', children, size = 'md', ...props }) {

    const base = "text-white py-2 px-4 rounded-md duration-300";

    const buttonClasses = {
        primary: 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700',
        secondary: 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700',
        warning: 'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700',
        danger: 'bg-red-500 hover:bg-red-600 active:bg-red-700',
        success: 'bg-green-500 hover:bg-green-600 active:bg-green-700',
        info: 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700',
        light: 'bg-gray-200 hover:bg-gray-300 active:bg-gray-400 !text-black',
    };

    const sizeClasses = {
        sm: 'text-sm py-1 px-2',
        md: 'text-base py-2 px-4',
        lg: 'text-lg py-3 px-6',
        full: 'w-full',
    }

  return (
    <button className={`${base} ${buttonClasses[variant]} ${sizeClasses[size]} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        {...props}
    >
        {children}
    </button>
  )
}

export default Button