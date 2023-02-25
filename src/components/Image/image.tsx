import React, { useRef } from 'react';
import { useOnLoadImages } from '../../utils/hooks/load-images';
import { PokeLoader } from '../PokeLoader/poke-loader';
import './image.scss';
interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}
export const Image = (props: ImageProps) => {
    const { src, alt, className } = props;

    const wrapperRef = useRef<HTMLDivElement>(null);
    const imageLoaded = useOnLoadImages(wrapperRef);

    return (
        <div ref={wrapperRef} className="image-wrapper">
            {!imageLoaded && <PokeLoader className="image-loader" />}
            <img
                src={src}
                alt={alt}
                className={`${className} ${imageLoaded ? 'active' : 'disable'}`}
            />
        </div>
    );
};
