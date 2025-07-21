import useTheme from '../../../hooks/useTheme';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 border rounded text-white dark:text-black  bg-gray-800 dark:bg-yellow-400"
    >
      {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default ThemeToggleButton;