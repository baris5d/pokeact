import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { PokemonTypes } from './pokemon-types';

describe('PokemonTypes', () => {
    const props = {
        types: [
            {
                slot: 1,
                type: {
                    name: 'grass',
                    url: 'https://pokeapi.co/api/v2/type/12/',
                    damage_relations: {
                        double_damage_from: [
                            {
                                name: 'fire',
                                url: 'https://pokeapi.co/api/v2/type/10/',
                            },
                            {
                                name: 'ice',
                                url: 'https://pokeapi.co/api/v2/type/15/',
                            },
                        ],
                        double_damage_to: [
                            {
                                name: 'water',
                                url: 'https://pokeapi.co/api/v2/type/11/',
                            },
                            {
                                name: 'ground',
                                url: 'https://pokeapi.co/api/v2/type/5/',
                            },
                            {
                                name: 'rock',
                                url: 'https://pokeapi.co/api/v2/type/6/',
                            },
                        ],
                    },
                },
            },
        ],
    };
    it('should render the weak types', () => {
        const { getByTestId } = render(
            <PokemonTypes
                title="Weak"
                prop="double_damage_from"
                types={props.types as any}
            />,
        );
        const typesWrapper = getByTestId('types-wrapper');
        expect(typesWrapper.children.length).toBe(2);
        const title = getByTestId('title');
        expect(title).toHaveTextContent('Weak Against');
    });

    it('should render the weak types', () => {
        const { getByTestId } = render(
            <PokemonTypes
                title="Strong"
                prop="double_damage_to"
                types={props.types as any}
            />,
        );
        const typesWrapper = getByTestId('types-wrapper');
        expect(typesWrapper.children.length).toBe(3);
        const title = getByTestId('title');
        expect(title).toHaveTextContent('Strong Against');
    });
});
