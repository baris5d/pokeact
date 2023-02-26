import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { TypeIcon } from './type-icon';

describe('TypeIcon', () => {
    it('renders a type icon for the given type', () => {
        const { container } = render(<TypeIcon type="fire" />);
        const path = container.querySelector('path');
        expect(path).toBeInTheDocument();
    });

    it('applies the given className', () => {
        const { container } = render(
            <TypeIcon type="fire" className="custom-class" />,
        );
        const icon = container.firstChild;
        expect(icon).toHaveClass('custom-class');
    });

    it('applies the given size', () => {
        const { container } = render(<TypeIcon type="fire" size={32} />);
        const icon = container.firstChild;
        expect(icon).toHaveAttribute('width', '32');
        expect(icon).toHaveAttribute('height', '32');
    });

    it('applies the given style', () => {
        const { container } = render(
            <TypeIcon
                type="fire"
                style={{ color: 'red', backgroundColor: 'black' }}
            />,
        );
        const icon = container.firstChild;
        expect(icon).toHaveStyle('color: red; background-color: black');
    });
});
