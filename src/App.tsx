import React from 'react';
import { Input } from './components/Input';
import Layout from './components/Layout';
import { ThemeContext } from './contexts/theme-context';
import useTheme from './utils/hooks/theme';
import { Header } from './components/Header/header';

function App(): JSX.Element {
    const [theme, setTheme] = useTheme();

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`theme-${theme}`}>
                <Layout>
                    <Header />
                    <Input />
                </Layout>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
