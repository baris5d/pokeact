import React from 'react';
import { render, screen } from '@testing-library/react';
import { useOnLoadImages } from '../../utils/hooks/load-images';
import { Image } from './image';
import '@testing-library/jest-dom';

jest.mock('../../utils/hooks/load-images', () => ({
    useOnLoadImages: jest.fn(),
}));

describe('Image', () => {
    const src = 'test-image.jpg';
    const alt = 'Test image';
    const className = 'test-class';

    beforeEach(() => {
        jest.mock('react', () => ({
            ...jest.requireActual('react'),
            useRef: jest.fn(),
        }));
        jest.clearAllMocks();
    });

    it('should render a PokeLoader while the image is loading', () => {
        (useOnLoadImages as jest.Mock).mockReturnValueOnce(false);

        render(<Image src={src} alt={alt} className={className} />);

        const loader = screen.getByRole('loader');
        expect(loader).toBeInTheDocument();
        expect(loader).toHaveClass('image-loader');
    });

    it('should call useOnLoadImages with the correct arguments', () => {
        render(<Image src={src} alt={alt} className={className} />);

        expect(useOnLoadImages).toHaveBeenCalledWith(expect.any(Object));
    });
});
