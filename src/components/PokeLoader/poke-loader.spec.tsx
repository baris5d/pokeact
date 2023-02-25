import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { PokeLoader, PoketopsLoader } from './poke-loader';

describe('PokeLoader', () => {
    it('renders the PokeLoader component with default props', () => {
        const { container } = render(<PokeLoader />);
        expect(container.firstChild).toHaveClass('poke-loader');
        expect(container.firstChild).toHaveAttribute('role', 'loader');
    });

    it('renders the PokeLoader component with custom className', () => {
        const { container } = render(<PokeLoader className="custom-class" />);
        expect(container.firstChild).toHaveClass('poke-loader');
        expect(container.firstChild).toHaveClass('custom-class');
        expect(container.firstChild).toHaveAttribute('role', 'loader');
    });

    it('renders the PoketopsLoader component', () => {
        const { container } = render(<PoketopsLoader />);
        expect(container.firstChild).toHaveClass('poketops-loader');
        expect(container.firstChild).toHaveAttribute('role', 'loader');
        expect(container.querySelectorAll('.poketops__poke').length).toEqual(3);
    });
});
