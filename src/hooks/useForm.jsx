import { useState, useEffect, useCallback, useMemo } from 'react';

export const useForm = (initialFields) => {
  // fields를 메모이제이션하여 불필요한 재계산 방지
  const fields = useMemo(() => initialFields, [initialFields.map(f => f.name).join(',')]);
  
  const [formData, setFormData] = useState(() => {
    const initialData = {};
    fields.forEach(field => {
      initialData[field.name] = '';
    });
    return initialData;
  });

  // formData 상태 변화를 추적 (디버깅용)
  useEffect(() => {
    console.log('useForm - formData updated:', formData);
  }, [formData]);

  // fields가 변경될 때만 폼을 재초기화 (처음 한 번만)
  useEffect(() => {
    console.log('useForm - fields changed, reinitializing form');
    const newFormData = {};
    fields.forEach(field => {
      newFormData[field.name] = '';
    });
    setFormData(newFormData);
  }, [fields]); // fields 자체를 의존성으로 사용

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('useForm - handleChange called:', { name, value });
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = useCallback(() => {
    console.log('useForm - resetForm called');
    const resetData = {};
    fields.forEach(field => {
      resetData[field.name] = '';
    });
    setFormData(resetData);
  }, [fields]);

  return {
    formData,
    handleChange,
    resetForm
  };
}; 