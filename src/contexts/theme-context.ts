import { createContext } from 'react';

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setTheme: () => {},
});
