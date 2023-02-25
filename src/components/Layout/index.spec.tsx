import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Layout from './index';

describe('Layout', () => {
    test('renders the children', () => {
        const childText = 'Hello, World!';
        const { getByText } = render(<Layout>{childText}</Layout>);
        const childElement = getByText(childText);
        expect(childElement).toBeInTheDocument();
    });

    test('has the container and wrapper classes', () => {
        const { container } = render(
            <Layout>
                <h1>Test case</h1>
            </Layout>,
        );
        expect(container.firstChild).toHaveClass('container');
        expect(container.firstChild?.firstChild).toHaveClass('wrapper');

        expect(container.firstChild?.firstChild?.firstChild).toHaveTextContent(
            'Test case',
        );
    });
});
