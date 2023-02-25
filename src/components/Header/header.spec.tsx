import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import { ThemeContext } from '../../contexts/theme-context';
import { Header } from './header';
import '@testing-library/jest-dom';

describe('Header', () => {
    test('renders logo and toggle button', () => {
        const setThemeMock = jest.fn();
        const { getByAltText } = render(
            <ThemeContext.Provider
                value={{ theme: 'dark', setTheme: setThemeMock }}
            >
                <Header />
            </ThemeContext.Provider>,
        );
        expect(getByAltText('Pokeact')).toBeInTheDocument();
        expect(getByAltText('moon')).toBeInTheDocument();
    });

    test('toggles theme on button click', () => {
        const setThemeMock = jest.fn();
        const { getByTestId } = render(
            <ThemeContext.Provider
                value={{ theme: 'dark', setTheme: setThemeMock }}
            >
                <Header />
            </ThemeContext.Provider>,
        );
        const toggleButton = getByTestId('toggle');
        fireEvent.click(toggleButton);
        expect(setThemeMock).toHaveBeenCalledTimes(1);
        expect(setThemeMock).toHaveBeenCalledWith('light');
    });
});
