export const findProperImage = (sprites: any) => {
    if (sprites.other.dream_world.front_default) {
        return sprites.other.dream_world.front_default;
    } else if (sprites.other.home.front_default) {
        return sprites.other.home.front_default;
    } else {
        return sprites.front_default;
    }
};
