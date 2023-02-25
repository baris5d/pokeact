export const findProperImage = (sprites: any) => {
    if (sprites?.other?.dream_world?.front_default) {
        return sprites.other.dream_world.front_default;
    }

    if (sprites?.other?.home?.front_default) {
        return sprites.other.home.front_default;
    }

    if (sprites?.other && sprites?.other['official-artwork']?.front_default) {
        return sprites.other['official-artwork'].front_default;
    }

    if (sprites?.front_default) {
        return sprites.front_default;
    }

    return './logo.svg';
};

export const useRGBA = (hex: string) => {
    const [r, g, b] = hex.match(/\w\w/g)?.map((c) => parseInt(c, 16)) ?? [
        0, 0, 0,
    ];

    if (isNaN(r) || isNaN(g) || isNaN(b)) {
        return 'rgba(0, 0, 0, 0.8)';
    }

    return `rgba(${r}, ${g}, ${b}, 0.8)`;
};

export const useOppositeColor = (hex: string) => {
    const [r, g, b] = hex.match(/\w\w/g)?.map((c) => parseInt(c, 16)) ?? [
        0, 0, 0,
    ];

    if (r * 0.299 + g * 0.587 + b * 0.114 > 186) {
        return '#111112';
    } else {
        return '#f1f1f1';
    }
};

export const kebabCaseToTitleCase = (str: string) => {
    return str
        .split('-')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ');
};

export const hgToKg = (height: number) => {
    return (height / 10).toFixed(1);
};

export const dmToFtAndIn = (height: number) => {
    const inches = height * 0.393701;
    const feet = Math.floor(inches / 12);

    const remainingInches = Math.round(inches % 12);

    return `${feet}' ${remainingInches}"`;
};

export const formatNumber = (num: string) => {
    return num.padStart(3, '0');
};

export const maxStat = (baseStat: number) => {
    return (
        2 * baseStat +
        Math.floor(Math.random() * 16) +
        Math.floor(Math.random() * 511) / 4 +
        5
    );
};
