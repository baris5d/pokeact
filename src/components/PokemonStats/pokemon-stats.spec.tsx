import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';
import { PokemonDetailStats } from './pokemon-stats';
import { Stats } from '../../types/pokemon';

const stats: Stats[] = [
    { base_stat: 50, effort: 0, stat: { name: 'speed', url: 'test.url' } },
    { base_stat: 100, effort: 0, stat: { name: 'attack', url: 'test.url' } },
    { base_stat: 75, effort: 0, stat: { name: 'defense', url: 'test.url' } },
];

describe('PokemonDetailStats', () => {
    it('renders the correct number of stat items', () => {
        const { queryAllByTestId } = render(
            <PokemonDetailStats stats={stats} color="red" />,
        );
        const statItems = queryAllByTestId('pokemon-detail-stats-item');
        expect(statItems).toHaveLength(stats.length);
    });

    it('renders the correct stat name for each item', () => {
        const { queryAllByTestId } = render(
            <PokemonDetailStats stats={stats} color="red" />,
        );
        const statNames = queryAllByTestId(
            'pokemon-detail-stats-item-name',
        ).map((element) => element.textContent);
        expect(statNames).toEqual(['Speed', 'Attack', 'Defense']);
    });

    it('renders the correct stat value for each item', () => {
        const { queryAllByTestId } = render(
            <PokemonDetailStats stats={stats} color="red" />,
        );
        const statValues = queryAllByTestId(
            'pokemon-detail-stats-item-value',
        ).map((element) => element.textContent);
        expect(statValues).toEqual(['50', '100', '75']);
    });
});
