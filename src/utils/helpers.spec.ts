import {
    findProperImage,
    useRGBA,
    useOppositeColor,
    kebabCaseToTitleCase,
    hgToKg,
    dmToFtAndIn,
    formatNumber,
    maxStat,
} from './helpers';

describe('findProperImage', () => {
    it('should return the dream world image if available', () => {
        const sprites = {
            other: {
                dream_world: {
                    front_default: 'dream_world_image.png',
                },
            },
        };
        expect(findProperImage(sprites)).toEqual('dream_world_image.png');
    });

    it('should return the home image if dream world image is not available', () => {
        const sprites = {
            other: {
                home: {
                    front_default: 'home_image.png',
                },
            },
        };
        expect(findProperImage(sprites)).toEqual('home_image.png');
    });

    it('should return the official artwork image if both dream world and home images are not available', () => {
        const sprites = {
            other: {
                'official-artwork': {
                    front_default: 'official_artwork_image.png',
                },
            },
        };
        expect(findProperImage(sprites)).toEqual('official_artwork_image.png');
    });

    it('should return the front default image if all other images are not available', () => {
        const sprites = {
            front_default: 'front_default_image.png',
        };
        expect(findProperImage(sprites)).toEqual('front_default_image.png');
    });

    it('should return the default logo if no image is available', () => {
        const sprites = {};
        expect(findProperImage(sprites)).toEqual('./logo.svg');
    });
});

describe('useRGBA', () => {
    it('should return the RGBA equivalent of the given hex color', () => {
        const hex = '#ff0000';
        expect(useRGBA(hex)).toEqual('rgba(255, 0, 0, 0.8)');
    });

    it('should return rgba(0, 0, 0, 0.8) if the input is not a valid hex color', () => {
        const hex = 'not-a-hex-color';
        expect(useRGBA(hex)).toEqual('rgba(0, 0, 0, 0.8)');
    });
});

describe('useOppositeColor', () => {
    it('should return black (#111112) for light colors', () => {
        const hex = '#ffffff';
        expect(useOppositeColor(hex)).toEqual('#111112');
    });

    it('should return white (#f1f1f1) for dark colors', () => {
        const hex = '#000000';
        expect(useOppositeColor(hex)).toEqual('#f1f1f1');
    });
});

describe('kebabCaseToTitleCase', () => {
    it('should convert a kebab-case string to title case', () => {
        const str = 'hello-world';
        expect(kebabCaseToTitleCase(str)).toEqual('Hello World');
    });
});

describe('hgToKg', () => {
    it('should convert height in hectograms to kilograms', () => {
        const height = 100;
        expect(hgToKg(height)).toEqual('10.0');
    });
});

describe('dmToFtAndIn', () => {
    it('should convert height in decimeters to feet and inches', () => {
        const height = 152;
        expect(dmToFtAndIn(height)).toEqual('4\' 12"');
    });
});

describe('formatNumber', () => {
    it('should format a number to 3 digits', () => {
        const num = '1';
        expect(formatNumber(num)).toEqual('001');
    });
});
