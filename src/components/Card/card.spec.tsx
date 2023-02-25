import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Card } from './card';
import { Pokemon } from '../../types/pokemon';
import '@testing-library/jest-dom';

jest.mock('../../utils/helpers', () => ({
    findProperImage: jest.fn().mockReturnValue('image-url'),
    formatNumber: jest.fn().mockReturnValue('001'),
    kebabCaseToTitleCase: jest.fn().mockReturnValue('Bulbasaur'),
    useOppositeColor: jest.fn().mockReturnValue('white'),
    useRGBA: jest.fn().mockReturnValue('rgba(0,0,0,0)'),
}));

const mockPokemon: Pokemon = {
    name: 'bulbasaur',
    id: 1,
    sprites: {
        front_default: 'front-default',
        other: {
            dream_world: {
                front_default: 'front-dream-world',
            },
            home: {
                front_default: 'front-home',
            },
        },
    },
    abilities: [],
    height: 0,
    order: 0,
    types: [],
    weight: 0,
    stats: [],
    species: {
        name: 'bulbasaur',
        url: 'url',
    },
};

// mock the <Color> component that is used in the <Card> component
jest.mock('color-thief-react', () => ({
    useColor: jest.fn().mockReturnValue({
        data: '#000',
        loading: false,
        error: null,
    }),
}));

describe('Card', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render the component without crashing', () => {
        render(
            <MemoryRouter>
                <Card {...mockPokemon} />
            </MemoryRouter>,
        );
    });

    it('should display the correct pokemon name and id', async () => {
        render(
            <MemoryRouter>
                <Card {...mockPokemon} />
            </MemoryRouter>,
        );

        const loader = screen.getByRole('loader');
        expect(loader).toBeInTheDocument();

        const card = screen.getByRole('link');
        expect(card).toBeInTheDocument();

        const title = screen.getByTestId('card__title');
        expect(title).toBeInTheDocument();

        const id = screen.getByTestId('card__id');
        expect(id).toBeInTheDocument();
    });

    it('should display the PokeLoader when Color is loading', async () => {
        render(
            <MemoryRouter>
                <Card {...mockPokemon} />
            </MemoryRouter>,
        );

        const loader = await screen.getByRole('loader');
        expect(loader).toBeInTheDocument();
    });
});
