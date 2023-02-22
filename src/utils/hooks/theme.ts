import { useState, useEffect } from 'react';

const isBrowserDefaulDark = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;

const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
};

const useTheme = (): [string, () => void] => {
    const [theme, setTheme] = useState(getDefaultTheme);

    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
        localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            setTheme(getDefaultTheme());
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return [theme, handleThemeChange];
};

export default useTheme;
