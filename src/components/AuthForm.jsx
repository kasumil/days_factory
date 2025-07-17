import React, { useState, useEffect } from 'react';

const AuthForm = ({ 
  title, 
  onSubmit, 
  submitText, 
  fields, 
  isLoading = false,
  error = null 
}) => {
  const [formData, setFormData] = useState(() => {
    const initialData = {};
    fields.forEach(field => {
      initialData[field.name] = '';
    });
    return initialData;
  });

  // formData 상태 변화를 추적
  useEffect(() => {
    console.log('formData updated:', formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            {fields.map((field, index) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="sr-only">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type || 'text'}
                  required={field.required !== false}
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${
                    index === 0 ? 'rounded-t-md' : ''
                  } ${
                    index === fields.length - 1 ? 'rounded-b-md' : ''
                  } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  placeholder={field.placeholder || field.label}
                  value={formData[field.name]}
                  onChange={handleChange}
                  autoComplete={field.autoComplete}
                />
              </div>
            ))}
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  처리중...
                </div>
              ) : (
                submitText
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm; 