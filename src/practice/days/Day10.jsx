import React from 'react';
import useCounterStore from '../../store/counterStore';
import Button from '../../components/practice/atoms/Button';

function Day10() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-bold">📊 Zustand Counter</h1>
      <div className="text-4xl">{count}</div>
      <div className="flex gap-2">
        <Button onClick={increase}>➕ 증가</Button>
        <Button onClick={decrease}>➖ 감소</Button>
        <Button variant="secondary" onClick={reset}>🔄 리셋</Button>
      </div>
    </div>
  );
}

export default Day10;
