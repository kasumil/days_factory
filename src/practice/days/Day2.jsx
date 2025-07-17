import React, { useState } from 'react'
import TextField from '../../components/practice/atoms/TextField'

function Day2() {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({
    name: true,
    password: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if(value.length === 0) {
      setErrors(prev => ({
        ...prev,
        [name]: true
      }));
    } else {
      // 에러 상태도 함께 업데이트
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  return (
    <div className='flex flex-col items-center justify-center mt-3'>
      <TextField
        id="name"
        name="name"
        label="이름"
        placeholder="이름을 입력하세요"
        error={errors.name}
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        id="password"
        name="password"
        label="비밀번호"
        placeholder="비밀번호를 입력하세요"
        error={errors.password}
        value={formData.password}
        onChange={handleChange}
      />
    </div>
  )
}

export default Day2