import { useState, useEffect, RefObject } from 'react';

export const useOnLoadImages = (ref: RefObject<HTMLElement>): boolean => {
    const [status, setStatus] = useState(false);

    useEffect(() => {
        const imagesLoaded = Array.from(
            ref.current?.querySelectorAll('img') ?? [],
        );
        if (imagesLoaded.length === 0) {
            setStatus(true);
            return;
        }

        const updateStatus = () => {
            const areAllImagesLoaded = imagesLoaded.every(
                (image) => image.complete,
            );
            setStatus(areAllImagesLoaded);
        };

        imagesLoaded.forEach((image) => {
            image.addEventListener('load', updateStatus, { once: true });
            image.addEventListener('error', updateStatus, { once: true });
        });

        return () => {
            imagesLoaded.forEach((image) => {
                image.removeEventListener('load', updateStatus);
                image.removeEventListener('error', updateStatus);
            });
        };
    }, [ref]);

    return status;
};
