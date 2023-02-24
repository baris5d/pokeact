import React from 'react';
import Layout from './components/Layout';
import { ThemeContext } from './contexts/theme-context';
import useTheme from './utils/hooks/theme';
import { Header } from './components/Header/header';
import { Search } from './features/Search/search';
import { Route, Routes } from 'react-router-dom';
import { PokemonDetail } from './features/PokemonDetail/pokemon-detail';

function App(): JSX.Element {
    const [theme, setTheme] = useTheme();

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Routes>
                <Route
                    path={`/pokemon/:pokemonId`}
                    element={
                        <div className={`theme-${theme}`}>
                            <PokemonDetail />
                        </div>
                    }
                />
            </Routes>
            <div className={`theme-${theme}`}>
                <Layout>
                    <Header />
                    <Search />
                </Layout>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
