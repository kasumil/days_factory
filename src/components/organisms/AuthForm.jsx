import React, { useEffect, useMemo } from 'react';
import { Heading, LinkButton } from '../atoms';
import { FormField, Alert } from '../molecules';
import { Button } from '../atoms';
import { useForm } from '../../hooks/useForm';

// fields를 메모이제이션하여 불필요한 재계산 방지
const getFieldsByType = (formType) => {
  console.log('getFieldsByType called with:', formType);
  if (formType === 'login') {
    return [
      {
        name: 'email',
        label: '이메일',
        type: 'email',
        placeholder: '이메일을 입력하세요',
        autoComplete: 'email',
        required: true
      },
      {
        name: 'password',
        label: '비밀번호',
        type: 'password',
        placeholder: '비밀번호를 입력하세요',
        autoComplete: 'current-password',
        required: true
      }
    ];
  } else if (formType === 'register') {
    return [
      {
        name: 'name',
        label: '이름',
        type: 'text',
        placeholder: '이름을 입력하세요',
        autoComplete: 'name',
        required: true
      },
      {
        name: 'email',
        label: '이메일',
        type: 'email',
        placeholder: '이메일을 입력하세요',
        autoComplete: 'email',
        required: true
      },
      {
        name: 'password',
        label: '비밀번호',
        type: 'password',
        placeholder: '비밀번호를 입력하세요',
        autoComplete: 'new-password',
        required: true
      },
      {
        name: 'confirmPassword',
        label: '비밀번호 확인',
        type: 'password',
        placeholder: '비밀번호를 다시 입력하세요',
        autoComplete: 'new-password',
        required: true
      }
    ];
  }
  return [];
};

const getTitleByType = (formType) => {
  return formType === 'login' ? '로그인' : '회원가입';
};

const getSubmitTextByType = (formType) => {
  return formType === 'login' ? '로그인' : '회원가입';
};

const getOppositeLink = (formType) => {
  if (formType === 'login') {
    return {
      to: '/register',
      text: '회원가입하기'
    };
  } else {
    return {
      to: '/login',
      text: '로그인하기'
    };
  }
};

// 순수 UI 컴포넌트 - 로직은 props로 받음
const AuthForm = ({ 
  type = 'login',
  onSubmit, 
  isLoading = false,
  error = null,
  onErrorClose 
}) => {
  console.log('AuthForm rendering with type:', type);
  
  try {
    // fields를 메모이제이션
    const fields = useMemo(() => getFieldsByType(type), [type]);
    console.log('Fields generated:', fields);
    
    const { formData, handleChange, resetForm } = useForm(fields);
    console.log('useForm hook result:', { formData, handleChange: typeof handleChange, resetForm: typeof resetForm });
    
    // type이 변경될 때만 폼을 재초기화 (resetForm 의존성 제거)
    useEffect(() => {
      console.log('AuthForm useEffect - resetting form for type:', type);
      resetForm();
    }, [type]); // resetForm 의존성 제거
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('AuthForm handleSubmit called with:', formData);
      onSubmit(formData, type);
    };

    const title = getTitleByType(type);
    const submitText = getSubmitTextByType(type);
    const oppositeLink = getOppositeLink(type);

    console.log('Rendering AuthForm with:', { title, submitText, fields: fields.length });

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Heading level={1} size="3xl" className="text-center">
              {title}
            </Heading>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <Alert 
                type="error" 
                message={error} 
                onClose={onErrorClose}
              />
            )}
            
            <div className="space-y-4">
              {fields.map((field) => (
                <FormField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type || 'text'}
                  placeholder={field.placeholder || field.label}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required !== false}
                  autoComplete={field.autoComplete}
                />
              ))}
            </div>

            <div className="space-y-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isLoading}
                isLoading={isLoading}
                className="w-full"
              >
                {submitText}
              </Button>
              
              <div className="text-center">
                <span className="text-gray-600 text-sm">
                  {type === 'login' ? '계정이 없으신가요?' : '이미 계정이 있으신가요?'}
                </span>
                <div className="mt-2">
                  <LinkButton
                    to={oppositeLink.to}
                    variant="text"
                    size="sm"
                  >
                    {oppositeLink.text}
                  </LinkButton>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AuthForm rendering error:', error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">오류가 발생했습니다</h1>
          <p className="text-gray-600">{error.message}</p>
        </div>
      </div>
    );
  }
};

export default AuthForm; 