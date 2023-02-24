import React from 'react';
import { useOnLoadImages } from '../../utils/hooks/load-images';
import { PokeLoader } from '../PokeLoader/poke-loader';

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}
export const Image = (props: ImageProps) => {
    const { src, alt, className } = props;

    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const imageLoaded = useOnLoadImages(wrapperRef);

    return (
        <div ref={wrapperRef}>
            {!imageLoaded && <PokeLoader />}
            <img src={src} alt={alt} className={className} />
        </div>
    );
};
