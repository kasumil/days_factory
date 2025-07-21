// pages/practice/Day9.jsx
import ThemeToggleButton from '../../components/practice/atoms/ThemeToggleButton';

function Day9() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 dark:text-white min-h-screen transition-colors">
      <h1 className="text-2xl mb-4">Day 9 - 다크 모드 토글</h1>
      <ThemeToggleButton />
    </div>
  );
}

export default Day9;
