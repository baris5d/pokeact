import React, { useContext } from 'react';
import moon from '../../assets/images/moon.png';
import sun from '../../assets/images/sun.png';
import { ThemeContext } from '../../contexts/theme-context';
import './header.scss';

function Header(): JSX.Element {
    const { theme, setTheme } = useContext(ThemeContext);
    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
        localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
    };

    return (
        <div className="header">
            <img src="/logo.svg" alt="Pokeact" className="logo" />
            <button onClick={handleThemeChange} data-testid="toggle">
                <img
                    src={theme === 'dark' ? moon : sun}
                    alt={theme === 'dark' ? 'moon' : 'sun'}
                />
            </button>
        </div>
    );
}

export { Header };
