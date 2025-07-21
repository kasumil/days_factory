import { useEffect, useState } from "react";
import { ThemeContext } from ".";

export default function ThemeProvder({ children }) {
    const [theme, setTheme] = useState(() =>
        localStorage.getItem('theme') || 'light'
    );

    const toggleTheme = () =>
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

    const value = {
        theme,
        toggleTheme
    }

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )

}