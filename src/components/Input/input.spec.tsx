import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './input';
import '@testing-library/jest-dom';

describe('Input', () => {
    test('renders input with placeholder', () => {
        const placeholder = 'Enter your name';
        const { getByPlaceholderText } = render(
            <Input
                placeholder={placeholder}
                onChange={function (
                    e: React.ChangeEvent<HTMLInputElement>,
                ): void {
                    throw new Error('Function not implemented.');
                }}
            />,
        );
        const inputElement = getByPlaceholderText(placeholder);
        expect(inputElement).toBeInTheDocument();
    });

    test('renders input with value', () => {
        const value = 'Jane Doe';
        const { getByDisplayValue } = render(
            <Input
                value={value}
                onChange={function (
                    e: React.ChangeEvent<HTMLInputElement>,
                ): void {
                    throw new Error('Function not implemented.');
                }}
            />,
        );
        const inputElement = getByDisplayValue(value);
        expect(inputElement).toBeInTheDocument();
    });

    test('focuses on input when component is mounted', () => {
        const { getByTestId } = render(
            <Input
                onChange={function (
                    e: React.ChangeEvent<HTMLInputElement>,
                ): void {
                    throw new Error('Function not implemented.');
                }}
            />,
        );
        const inputElement = getByTestId('input');
        expect(inputElement).toHaveFocus();
    });
});
