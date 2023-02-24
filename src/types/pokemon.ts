export interface PokeAPIResource {
    [x: string]: any;
    name: string;
    url: string;
}

export interface Abilities {
    ability: PokeAPIResource;
    is_hidden: boolean;
    slot: number;
}

export interface Type {
    slot: number;
    type: PokeAPIResource;
    damage_relations: DamageRelations[];
}

export interface DamageRelations {
    double_damage_from: PokeAPIResource[];
    double_damage_to: PokeAPIResource[];
    half_damage_from: PokeAPIResource[];
    half_damage_to: PokeAPIResource[];
    no_damage_from: PokeAPIResource[];
    no_damage_to: PokeAPIResource[];
}

export interface Sprites {
    other: Other;
    front_default: string;
}

export interface Other {
    dream_world: DreamWorld;
    home: Home;
}

export interface Home {
    front_default: string;
}

export interface DreamWorld {
    front_default: string;
}

export interface Stats {
    base_stat: number;
    effort: number;
    stat: PokeAPIResource;
}
export interface Pokemon {
    abilities: Abilities[];
    height: number;
    id: number;
    name: string;
    order: number;
    species: PokeAPIResource;
    sprites: Sprites;
    types: Type[];
    weight: number;
    stats: Stats[];
}
