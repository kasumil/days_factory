import React, { useCallback, useMemo, useState } from 'react'
import TextField from '../../components/practice/atoms/TextField';
import Button from '../../components/practice/atoms/Button';

function Day3() {
    const textData = [
        {
            id: 'email-day3',
            name: 'email',
            label: '이메일',
            placeholder: '이메일을 입력하세요',
            type: 'email'
        },
        {
            id: 'password-day3',
            name: 'password',
            label: '비밀번호',
            placeholder: '비밀번호를 입력하세요',
            type: 'password'
        }
    ];

    const [formData, setFormData] = useState(() => {
        const initial = {};
        textData.forEach(element => {
            initial[element.name] = "";
        });
        return initial;
    });

    const [errors, setErrors] = useState(() => {
        const initial = {};
        textData.forEach(field => {
          initial[field.name] = { isValid: false, message: '필수 입력 항목입니다.' };
        });
        return initial;
    });

    // 유효성 검사 규칙 정의
    const validationRules = {
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: '올바른 이메일 형식을 입력해주세요.'
        },
        password: {
            required: true,
            minLength: 8,
            pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            message: '비밀번호는 8자 이상이며, 영문 대소문자와 숫자를 포함해야 합니다.'
        }
    };

    const validateField = (name, value) => {
        const rule = validationRules[name];
        if (!rule) return { isValid: true, message: '' };

        // 필수 입력 체크
        if (rule.required && value.length === 0) {
            return { isValid: false, message: '필수 입력 항목입니다.' };
        }

        // 최소 길이 체크
        if (rule.minLength && value.length < rule.minLength) {
            return { isValid: false, message: `${rule.minLength}자 이상 입력해주세요.` };
        }

        // 패턴 체크
        if (rule.pattern && !rule.pattern.test(value)) {
            return { isValid: false, message: rule.message };
        }

        return { isValid: true, message: '' };
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log('handleChange:', { name, value });

        // 1. formData 업데이트
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // 2. 유효성 검사
        const validation = validateField(name, value);
        
        // 3. 에러 상태 업데이트
        setErrors(prev => ({
            ...prev,
            [name]: {
                isValid: validation.isValid,
                message: validation.message
            }
        }));

        console.log('Validation result:', { name, value, ...validation });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit - formData:', formData);
        console.log('Submit - errors:', errors);
    }

    // 버튼 활성화 여부 확인
    const canSubmit = useCallback(() => {
        // 모든 필드가 채워져 있는지 확인
        const allFieldsFilled = Object.values(formData).every(value => value !== "");
        
        // 모든 에러가 해결되었는지 확인 (isValid가 true인지)
        const noErrors = Object.values(errors).every(error => error.isValid);
        
        const canSubmit = allFieldsFilled && noErrors;
        
        console.log('Button state:', {
            formData: Object.values(formData),
            errors: Object.values(errors).map(e => e.isValid),
            allFieldsFilled,
            noErrors,
            canSubmit
        });
        
        return canSubmit;
    }, [formData, errors])

    return (
        <form className='w-full max-w-sm mx-auto flex flex-col items-center justify-center gap-1' onSubmit={handleSubmit}>
            {
                textData.map((item) => (
                    <TextField
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        type={item.type}
                        label={item.label}
                        placeholder={item.placeholder}
                        error={!errors?.[item.name]?.isValid} 
                        errorMessage={errors?.[item.name]?.message}
                        value={formData?.[item.name] || ''}
                        onChange={handleChange}
                    />
                ))
            }

            <Button
                type="submit"
                disabled={!canSubmit()} // 함수 호출로 수정
            >
                로그인
            </Button>
        </form>
    )
}

export default Day3